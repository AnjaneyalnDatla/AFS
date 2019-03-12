import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { KeycloakService } from 'keycloak-angular';
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
export const ROUTES_SuperUser: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', type: 'link', iconType: 'dashboard', class: '', children: [] },
    {
        path: '/sales', title: 'Sales', type: 'sub', iconType: 'shop_two', class: '', collapse: 'components',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/purchases', title: 'Purchases', type: 'sub', iconType: 'shopping_cart', class: '', collapse: 'purchases',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/expenses', title: 'Expenses', type: 'sub', iconType: 'money', class: '', collapse: 'expenses',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/receivables', title: 'Receivables', type: 'sub', iconType: 'attach_money', class: '', collapse: 'receivables',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/contacts', title: 'Contacts', type: 'sub', iconType: 'person', class: '', collapse: 'contacts',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/account', title: 'Accounts', type: 'sub', iconType: 'account_balance', class: '', collapse: 'accounts',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/users', title: 'Users', type: 'sub', iconType: 'people', class: '', collapse: 'users',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'view', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' },
        ]
    },
    { path: '/reports', title: 'Reports', type: 'link', iconType: 'bar_chart', class: '', children: [] },
];

export const ROUTES_Accountant: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', type: 'link', iconType: 'dashboard', class: '', children: [] },
    {
        path: '/sales', title: 'Sales', type: 'sub', iconType: 'shop_two', class: '', collapse: 'components',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/purchases', title: 'Purchases', type: 'sub', iconType: 'shopping_cart', class: '', collapse: 'purchases',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/expenses', title: 'Expenses', type: 'sub', iconType: 'money', class: '', collapse: 'expenses',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/receivables', title: 'Receivables', type: 'sub', iconType: 'attach_money', class: '', collapse: 'receivables',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/contacts', title: 'Contacts', type: 'sub', iconType: 'person', class: '', collapse: 'contacts',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/account', title: 'Accounts', type: 'sub', iconType: 'account_balance', class: '', collapse: 'accounts',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
];

export const ROUTES_GeneralUser: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', type: 'link', iconType: 'dashboard', class: '', children: [] },
    {
        path: '/sales', title: 'Sales', type: 'sub', iconType: 'shop_two', class: '', collapse: 'components',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
    {
        path: '/purchases', title: 'Purchases', type: 'sub', iconType: 'shopping_cart', class: '', collapse: 'purchases',
        children: [
            { path: 'create', title: 'Create', icon: 'shop_two', class: '', ab: 'C' },
            { path: 'viewAll', title: 'View All', icon: 'shop_two', class: '', ab: 'VA' }
        ]
    },
];

export var ROUTES: RouteInfo[] = [];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private kcService: KeycloakService) { }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        if (this.kcService.getUserRoles().includes('super-user')) {
            ROUTES = ROUTES_SuperUser;
        }
        else if (this.kcService.getUserRoles().includes('accountant')) {
            ROUTES = ROUTES_Accountant;
        }
        else if (this.kcService.getUserRoles().includes('general-user')) {
            ROUTES = ROUTES_GeneralUser;
        }
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
    async logout() {
        await this.kcService.logout();
    }
}
