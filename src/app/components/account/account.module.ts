import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AccountRoutes } from './account.routing';

import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountViewComponent } from './account-view/account-view.component';
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
      RouterModule.forChild(AccountRoutes),
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
        AccountCreateComponent,
        AccountViewComponent,
    ]
  })
  
export class AccountModule {}
