import { Component, OnInit } from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children: childArry[];
}
declare interface childArry {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', children:[] },
    { path: '/notifications', title: 'Departments',  icon:'layers', class: '', 
        children:[
            { path: '/#', title: 'Information Technology',  icon:'layers', class: ''},
            { path: '/#', title: 'Computer Science',  icon:'layers', class: ''},
            { path: '/#', title: 'Electronics',  icon:'layers', class: ''},
            { path: '/#', title: 'Mechanical',  icon:'layers', class: ''},
    ] },
    { path: '/user-profile', title: 'Sales',  icon:'shop_two', class: '' , children:[]},
    { path: '/table-list', title: 'Purchases',  icon:'shopping_cart', class: '', children:[] },
    { path: '/typography', title: 'Products and Services',  icon:'content_paste', class: '', children:[] },
    { path: '/icons', title: 'Contacts',  icon:'person', class: '', children:[] },
    { path: '/upgrade', title: 'Accounts',  icon:'account_balance', class: '', children:[] },
    { path: '/maps', title: 'Reports',  icon:'bar_chart', class: '', children:[] },
    { path: '/notifications', title: 'Masters',  icon:'create', class: '' , children:[]},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
