import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../../../_services/user.service';
import { usercolumns, userrolescolumns } from 'app/_models/common/table-columns';
import { ValidationService } from '../../../_services/validation.service';
import { ConfirmPasswordValidator } from '../../../_helpers/confirmPasswordValidator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  // Table columns 
  columns = usercolumns;

  columns1 = userrolescolumns;

  roleData = [
    {
      "description": "Grant all access",
      "role": "Administrator",
    },
    {
      "description": "Grant access to sales",
      "role": "Agent",
    },
  ];

  userForm = this.fb.group({
    id: [''],
    department: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: [{value:'',disabled: true}, [Validators.required]],
    email: ['', [Validators.required, ValidationService.emailValidator]],
    password: ['', [Validators.required, ValidationService.passwordValidator]],
    confirmPswd: ['', Validators.required],
    roles:['' ,Validators.required],
    organization:['' ,Validators.required]
  },{
    validator: ConfirmPasswordValidator.MatchPassword
 });


  displayedColumns = this.columns.map(c => c.columnDef);

  dataSource = new MatTableDataSource();

  //dataSource = new MatTableDataSource(this.testData);
  pageOptions = [10, 20, 30];

  displayedColumns1 = this.columns1.map(c => c.columnDef);
  dataSource1 = new MatTableDataSource();

  showUser: boolean = false;
  isLoaded: boolean = false;

  cardTitle = "View User";
  constructor(private fb: FormBuilder, private userService: UserService, private toastr: ToastrService) { }

  async ngOnInit() {
    await this.fetchUserDetails();
    await this.fetchRoles();
  }

  fetchUserDetails() {
    this.userService.getUsersList().subscribe(
      data => {
        console.log('User List: ' + data);
        this.dataSource = data;
      })
  }

  fetchRoles() {
    this.userService.getRoles().subscribe(
      data => {
        console.log('Roles: ' + data);
        this.dataSource1 = data;
      })
  }

  getUser(user){
    console.log(user);
    this.loadUserList(user.id);
    this.showUser= true;  
  }

  deleteUser(user){
    console.log(user);
    this.userService.deleteUserById(user.id).subscribe(
      data => {
        console.log("user deleted");
        this.toastr.info('User deleted successfully ', 'Success', {
          timeOut: 3000,
          progressBar: true
        });
      });
  }


  private loadUserList(id) {
    this.userService.getUserById(id).subscribe(
      data => {
        //this.dataSource.data = data;
        console.log(data);
        this.isLoaded = true;
        this.userForm.controls['id'].setValue(data.id);
        this.userForm.controls['firstName'].setValue(data.firstName);
        this.userForm.controls['lastName'].setValue(data.lastName);
        this.userForm.controls['email'].setValue(data.email);
        this.userForm.controls['username'].setValue(data.username);
        if(data.attributes.departmentId!=null)
          this.userForm.controls['department'].setValue(parseInt(data.attributes.departmentId[0]), {onlySelf: true});
        this.userForm.controls['organization'].setValue(data.groups[0], {onlySelf: true});
        this.userForm.controls['roles'].setValue(data.realmRoles, {onlySelf: true});

      }
    );
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;

  }

}
