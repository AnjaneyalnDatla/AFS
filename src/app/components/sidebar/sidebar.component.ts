import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    type: string;
    iconType: string;
    class: string;
    collapse?: string,
    children?: childArry[];
}
declare interface childArry {
    path: string;
    title: string;
    icon: string;
    class: string;
    ab: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', type: 'link', iconType: 'dashboard', class: '', children: [] },
    {
        path: '/sales', title: 'Sales', type: 'sub', iconType: 'shop_two', class: '', collapse: 'components',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' },
            { path: 'edit', title: 'Edit', icon: 'shop_two', class: '', ab: 'E' },
        ]
    },
    {
        path: '/purchases', title: 'Purchases', type: 'sub', iconType: 'shopping_cart', class: '', collapse: 'purchases',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    { path: '/contacts', title: 'Contacts', type: 'link', iconType: 'person', class: '', children: [] },
    { path: '/account', title: 'Accounts', type: 'link', iconType: 'account_balance', class: '', children: [] },
    { path: '/reports', title: 'Reports', type: 'link', iconType: 'bar_chart', class: '', children: [] },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    public menuItems: any[];

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
