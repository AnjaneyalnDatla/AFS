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
} from '@angular/material';
import{
  ChartsModule,
}from 'ng2-charts/ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
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
  ]
})

export class AdminLayoutModule {}
