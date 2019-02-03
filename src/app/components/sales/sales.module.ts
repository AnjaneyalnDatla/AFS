import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SalesRoutes } from './sales.routing';

import { SalesCreateComponent } from './sales-create/sales-create.component';
import { SalesViewComponent } from './sales-view/sales-view.component';
import { SharedModule } from '../../components/commons/shared.module';
import { AppAuthGuard } from '../../app.authguard';


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
// import { KeycloakService } from '../../keycloak.service';
import { KeycloakService } from 'keycloak-angular';
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(SalesRoutes),
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
        SalesCreateComponent,
        SalesViewComponent
    ],
    providers: [AppAuthGuard, KeycloakService]
  })
  
export class SalesModule {}
