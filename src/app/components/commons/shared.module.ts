import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceComponent } from '../commons/forms/accounts/invoice.component';
import { SortedTableComponent } from '../commons/tables/sorted-tables/sortedtable.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTableModule,
  MatMenuModule,
  MatRadioModule,
  MatSortModule,
  MatTabsModule,
  MatIconModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule,
    MatRadioModule,
    MatSortModule,
    MatTabsModule,
    HttpClientModule,
    MatIconModule,
  ],
  declarations: [
    InvoiceComponent,
    SortedTableComponent
  ],
  exports: [
    InvoiceComponent,
    SortedTableComponent
  ]
})
export class SharedModule { }