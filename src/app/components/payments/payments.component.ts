import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormArray, FormControl, Form } from '@angular/forms';
import { TransactionsService } from '../../_services/transactions.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {


  searchForm = this.fb.group({
    transactionNumber: ['', Validators.required],
  });
  transaction: any;
  isLoadSearchItem: boolean = false;
  constructor(private fb: FormBuilder,
    private transactionsService: TransactionsService) {
  }

  ngOnInit() {

  }


  ngAfterViewInit() {
  }

  // Executed When Form Is Submitted  
  onFormSubmit(form: any) {
    console.log(form.transactionNumber);
    this.transactionsService.getTransactionByTransactionNumber(form.transactionNumber).subscribe(
      data => {
        this.transaction = data;
        console.log(this.transaction.paymentAmount);
        this.isLoadSearchItem = true;
      }
    );
  }

}
