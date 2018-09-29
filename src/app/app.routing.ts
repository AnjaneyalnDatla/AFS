import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './components/layouts/login-layout/login-layout.component';
//import { LoginComponent } from './login/login.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './components/layouts/login-layout/login-layout.module#LoginLayoutModule'
  },
  ]},
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './components/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  },
  //{ path: 'login', component: LoginComponent},
   //path: '', 
        //component: LoginLayoutComponent,
        //children: [
          //{ path: '', component: LoginComponent, pathMatch: 'full'},
          //{ path: 'login', component: LoginComponent }          
        //]
	//}
  ]}
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
