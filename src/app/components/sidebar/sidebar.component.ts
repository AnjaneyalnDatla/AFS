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
    { path: '/sales', title: 'Sales',  icon:'shop_two', class: '' , children:[]},
    { path: '/purchases', title: 'Purchases',  icon:'shopping_cart', class: '', children:[] },
    //{ path: '/productandservices', title: 'Products and Services',  icon:'content_paste', class: '', children:[] },
    { path: '/contacts', title: 'Contacts',  icon:'person', class: '', children:[] },
    { path: '/account', title: 'Accounts',  icon:'account_balance', class: '', children:[] },
    { path: '/reports', title: 'Reports',  icon:'bar_chart', class: '', children:[] },
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
