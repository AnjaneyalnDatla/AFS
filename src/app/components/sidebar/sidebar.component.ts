import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/notifications', title: 'Departments',  icon:'layers', class: '' },
    { path: '/user-profile', title: 'Sales',  icon:'shop_two', class: '' },
    { path: '/table-list', title: 'Purchases',  icon:'shopping_cart', class: '' },
    { path: '/typography', title: 'Products and Services',  icon:'content_paste', class: '' },
    { path: '/icons', title: 'Contacts',  icon:'person', class: '' },
    { path: '/upgrade', title: 'Accounts',  icon:'account_balance', class: '' },
    { path: '/maps', title: 'Reports',  icon:'bar_chart', class: '' },
    { path: '/notifications', title: 'Masters',  icon:'create', class: '' },
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
