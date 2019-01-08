import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReceivablesRoutes } from './receivables.routing';
import { ReceivablesCreateComponent } from './receivables-create/receivables-create.component';
import { ReceivablesViewComponent } from './receivables-view/receivables-view.component';

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
    RouterModule.forChild(ReceivablesRoutes),
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
    ReceivablesCreateComponent,
    ReceivablesViewComponent
  ]
})

export class ReceivablesModule { }
