import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PurchasesRoutes } from './purchases.routing';

import { PurchasesCreateComponent } from './purchases-create/purchases-create.component';
import { PurchasesViewComponent } from './purchases-view/purchases-view.component';
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
      RouterModule.forChild(PurchasesRoutes),
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
        PurchasesCreateComponent,
        PurchasesViewComponent,
    ]
  })
  
export class PurchasesModule {}
