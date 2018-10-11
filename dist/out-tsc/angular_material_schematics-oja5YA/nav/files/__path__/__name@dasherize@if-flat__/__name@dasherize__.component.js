"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require();
if (!!viewEncapsulation) {
     %  > , ViewEncapsulation <  % ;
}
 %  >  % ;
if (changeDetection !== 'Default') {
     %  > , ChangeDetectionStrategy <  % ;
}
 %  > ;
from;
'@angular/core';
var layout_1 = require("@angular/cdk/layout");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
if (inlineTemplate) {
     %  >
        template;
    "\n    <mat-sidenav-container class=\"sidenav-container\">\n      <mat-sidenav\n        #drawer\n        class=\"sidenav\"\n        fixedInViewport=\"true\"\n        [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n        [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n        [opened]=\"!(isHandset$ | async)\">\n        <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n        <mat-nav-list>\n          <a mat-list-item href=\"#\">Link 1</a>\n          <a mat-list-item href=\"#\">Link 2</a>\n          <a mat-list-item href=\"#\">Link 3</a>\n        </mat-nav-list>\n      </mat-sidenav>\n      <mat-sidenav-content>\n        <mat-toolbar color=\"primary\">\n          <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"drawer.toggle()\"\n            *ngIf=\"isHandset$ | async\">\n            <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n          </button>\n          <span><%= project %></span>\n        </mat-toolbar>\n        <!-- Add Content Here -->\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  ",  % ;
}
else {
     %  >
        templateUrl;
    './<%= dasherize(name) %>.component.html',  % ;
}
if (inlineStyle) {
     %  >
        styles;
    [
        "\n    .sidenav-container {\n      height: 100%;\n    }\n    \n    .sidenav {\n      width: 200px;\n    }\n\n    .mat-toolbar.mat-primary {\n      position: sticky;\n      top: 0;\n    }\n  "
    ] <  % ;
}
else {
     %  >
        styleUrls;
    ['./<%= dasherize(name) %>.component.<%= styleext %>'] <  % ;
}
 %  >  % ;
if (!!viewEncapsulation) {
     %  > ,
        encapsulation;
    ViewEncapsulation. < ;
    viewEncapsulation %  >  % ;
}
if (changeDetection !== 'Default') {
     %  > ,
        changeDetection;
    ChangeDetectionStrategy. < ;
    changeDetection %  >  % ;
}
 %  >
;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
(name) %  > module_1.Component;
{
    isHandset$: rxjs_1.Observable < boolean > ;
    this.breakpointObserver.observe(layout_1.Breakpoints.Handset)
        .pipe(operators_1.map(function (result) { return result.matches; }));
    constructor(private, breakpointObserver, layout_1.BreakpointObserver);
    { }
}
//# sourceMappingURL=__name@dasherize__.component.js.map