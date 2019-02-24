import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceComponent } from '../commons/forms/accounts/invoice.component';
import { SortedTableComponent } from '../commons/tables/sorted-tables/sortedtable.component';
import { MdTableComponent } from '../commons/tables/md-table/md-table.component';
import { AccountsFormComponent } from '../commons/forms/accounts/accountsform.component';
import { ContactsFormComponent } from '../commons/forms/contacts/contactsform.component';
import { PrivilegesComponent } from '../commons/forms/users/privileges.component';
import { UsersFormComponent } from '../commons/forms/users/usersform.component';
import { ControlMessagesComponent } from '../commons/control-messages.component';
import { DashboardTableComponent } from './tables/dashboard-table/dashboard-table.component';
import { SafePipe } from '../../_helpers/safe.pipe';

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
    SortedTableComponent,
    MdTableComponent,
    AccountsFormComponent,
    ContactsFormComponent,
    PrivilegesComponent,
    UsersFormComponent,
    ControlMessagesComponent,
    SafePipe,
    DashboardTableComponent
  ],
  exports: [
    InvoiceComponent,
    SortedTableComponent,
    MdTableComponent,
    AccountsFormComponent,
    ContactsFormComponent,
    PrivilegesComponent,
    UsersFormComponent,
    ControlMessagesComponent,
    SafePipe,
    DashboardTableComponent
  ]
})
export class SharedModule { }