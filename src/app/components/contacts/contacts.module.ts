import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactsRoutes } from './contacts.routing';

import { ContactsCreateComponent } from './contacts-create/contacts-create.component';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';
import { SharedModule } from '../../components/commons/shared.module';

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
      RouterModule.forChild(ContactsRoutes),
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
    SharedModule,
    ],
    declarations: [
        ContactsCreateComponent,
        ContactsViewComponent,
    ]
  })
  
export class ContactsModule {}
