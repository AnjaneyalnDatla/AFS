import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutes } from './users.routing';

import { UsersCreateComponent } from './users-create/users-create.component';

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
      RouterModule.forChild(UsersRoutes),
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
        UsersCreateComponent,
    ]
  })
  
export class UsersModule {}
