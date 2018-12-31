import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormArray, FormControl, Form } from '@angular/forms';
import { TransactionsService } from '../../_services/transactions.service';
import { CommonService } from '../../_services/common.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {


  bills: any = [];
  payments: any = [];
  organisationAccounts = [];


  searchForm = this.fb.group({
    transactionNumber: ['', Validators.required],
  });

  paymentForm = this.fb.group({
    billNumber: ['', Validators.required],
    bill_issued_date: ['', Validators.required],
    amount: ['', Validators.required],
    payments: this.fb.group({
      amount: ['', Validators.required],
      paymentDate: ['', Validators.required],
      isNew: true,
      isActive: true,
      accounts: this.fb.group({
        id: ['', Validators.required],
      }),
    }),
  });

  transaction: any;
  message:String;
  isLoadSearchItem: boolean = false;
  displayPaymentOption:boolean = false;
  constructor(private fb: FormBuilder,
    private transactionsService: TransactionsService,
    private commonService: CommonService) {
  }

  ngOnInit() {

    this.getAccounts();
  }


  ngAfterViewInit() {
  }

  // Executed When Form Is Submitted  
  onFormSubmit(form: any) {
    console.log(form.transactionNumber);
    this.transactionsService.getTransactionByTransactionNumber(form.transactionNumber).subscribe(
      data => {
        console.log(data);
        this.transaction = data;
        console.log(this.transaction.paymentAmount);
        if(this.transaction.transactionStatus.id !='1'){
          this.displayPaymentOption = true;
        }
        this.isLoadSearchItem = true;
        this.message = "";
      },
      error =>{
        console.log(error.error);
        this.transaction = "";
        this.message = "Requested transaction not found";
        this.isLoadSearchItem = false;
      }
    );
  }

  // Executed When Form Is Submitted  
  onPaymentFormSubmit(form: any) {
    this.payments.push(form.payments);
    form.payments = this.payments;
    
    this.transaction.bills.push(form);
    console.log("Payment Form Submitted");
    console.log(this.transaction);
    this.transactionsService.updateTransaction(this.transaction).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.transaction = data;
        this.message = "Payment Successfully Recorded";
        this.paymentForm.reset();
        this.paymentForm.markAsPristine();
        this.paymentForm.markAsUntouched();
        this.paymentForm.updateValueAndValidity();
      }
    );
  }


  private getAccounts() {//load on init
    //OrganisationAccounts do not have contact ID. this needs to be refactored
    this.commonService.getAccounts().subscribe(
      data => {
        this.organisationAccounts = data;
        console.log("Accounts");
        console.log(JSON.stringify(this.organisationAccounts));
      }
    );
  }

}
