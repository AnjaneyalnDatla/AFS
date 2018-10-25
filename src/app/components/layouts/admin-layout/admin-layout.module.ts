import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SalesComponent } from '../../sales/sales.component';
import { PurchasesComponent } from '../../purchases/purchases.component';
import { ProductsAndServicesComponent } from '../../productandservices/productandservices.component';
import { ContactsComponent } from '../../contacts/contacts.component';
import { ReportsComponent } from '../../reports/reports.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AccountComponent } from '../../account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { SortedTableComponent } from '../../commons/tables/sorted-tables/sortedtable.component';


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
  ],
  declarations: [
    DashboardComponent,
    SalesComponent,
    PurchasesComponent,
    ProductsAndServicesComponent,
    ContactsComponent,
    ReportsComponent,
    NotificationsComponent,
    AccountComponent,
    SortedTableComponent,
  ]
})

export class AdminLayoutModule {}
