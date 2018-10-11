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
var operators_1 = require("rxjs/operators");
var layout_1 = require("@angular/cdk/layout");
if (inlineTemplate) {
     %  >
        template;
    "\n    <div class=\"grid-container\">\n      <h1 class=\"mat-h1\">Dashboard</h1>\n      <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n        <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-header>\n              <mat-card-title>\n                {{card.title}}\n                <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n                  <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n                  <button mat-menu-item>Expand</button>\n                  <button mat-menu-item>Remove</button>\n                </mat-menu>\n              </mat-card-title>\n            </mat-card-header>\n            <mat-card-content class=\"dashboard-card-content\">\n              <div>Card Content Here</div>\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  ",  % ;
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
        "\n      .grid-container {\n        margin: 20px;\n      }\n      \n      .dashboard-card {\n        position: absolute;\n        top: 15px;\n        left: 15px;\n        right: 15px;\n        bottom: 15px;\n      }\n      \n      .more-button {\n        position: absolute;\n        top: 5px;\n        right: 10px;\n      }\n\n      .dashboard-card-content {\n        text-align: center;\n      }\n  "
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
    /** Based on the screen size, switch from standard to one column per row */
    cards = this.breakpointObserver.observe(layout_1.Breakpoints.Handset).pipe(operators_1.map(function (_a) {
        var matches = _a.matches;
        if (matches) {
            return [
                { title: 'Card 1', cols: 1, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 1 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }
        return [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
    }));
    constructor(private, breakpointObserver, layout_1.BreakpointObserver);
    { }
}
//# sourceMappingURL=__name@dasherize__.component.js.map