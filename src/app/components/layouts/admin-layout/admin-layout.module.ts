import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SalesComponent } from '../../sales/sales.component';
import { PurchasesComponent } from '../../purchases/purchases.component';
import { ContactsComponent } from '../../contacts/contacts.component';
import { ReportsComponent } from '../../reports/reports.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AccountComponent } from '../../account/account.component';
import { HttpClientModule } from '@angular/common/http';
//import { SortedTableComponent } from '../../commons/tables/sorted-tables/sortedtable.component';
import { WizardComponent } from '../../commons/wizard/wizard.component';
import { ContactsFormComponent } from '../../commons/forms/contacts/contactsform.component';
import { AccountsFormComponent } from '../../commons/forms/accounts/accountsform.component';
//import { InvoiceComponent } from '../../commons/forms/accounts/invoice.component';
import {SharedModule} from '../../../components/commons/shared.module';

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

import{
  ChartsModule,
}from 'ng2-charts/ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
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
    ChartsModule,
    MatMenuModule,
    MatRadioModule,
    MatSortModule,
    MatTabsModule,
    HttpClientModule,
    MatIconModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    SalesComponent,
    PurchasesComponent,
    ContactsComponent,
    ReportsComponent,
    NotificationsComponent,
    AccountComponent,
    //SortedTableComponent,
    WizardComponent,
    ContactsFormComponent,
    AccountsFormComponent,
    //InvoiceComponent
  ],
  exports: [
    DashboardComponent,
    SalesComponent,
    PurchasesComponent,
    ContactsComponent,
    ReportsComponent,
    NotificationsComponent,
    AccountComponent,
    //SortedTableComponent,
    WizardComponent,
    ContactsFormComponent,
    AccountsFormComponent,
    //InvoiceComponent
  ]
})

export class AdminLayoutModule {}
