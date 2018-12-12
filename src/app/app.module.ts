import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatMenuModule} from '@angular/material';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './components/layouts/login-layout/login-layout.component';
import { AuthenticationService } from './_services/authentication.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TransactionsService } from './_services/transactions.service';
import { ContactsService } from './_services/contacts.service';
import { CommonService } from './_services/common.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
	  ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
	  MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    ChartsModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
	  LoginLayoutComponent,
  ],
  providers: [AuthenticationService,TransactionsService, ContactsService, CommonService,CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
