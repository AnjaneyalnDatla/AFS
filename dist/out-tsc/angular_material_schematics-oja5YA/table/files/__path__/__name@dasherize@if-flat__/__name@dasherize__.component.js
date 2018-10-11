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
var material_1 = require("@angular/material");
classify(name) %  > DataSource;
from;
'./<%= dasherize(name) %>-datasource';
if (inlineTemplate) {
     %  >
        template;
    "\n    <div class=\"mat-elevation-z8\">\n      <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n\n        <!-- Id Column -->\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n      <mat-paginator #paginator\n        [length]=\"dataSource.data.length\"\n        [pageIndex]=\"0\"\n        [pageSize]=\"10\"\n        [pageSizeOptions]=\"[25, 50, 100, 250]\">\n      </mat-paginator>\n    </div>\n  ",  % ;
}
else {
     %  >
        templateUrl;
    './<%= dasherize(name) %>.component.html',  % ;
}
if (inlineStyle) {
     %  >
        styles;
    [] <  % ;
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
implements;
module_1.OnInit;
{
    paginator: material_1.MatPaginator;
    sort: material_1.MatSort;
    dataSource: ;
    classify(name) %  > DataSource;
    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name'];
    ngOnInit();
    {
        this.dataSource = new  < ;
        classify(name) %  > DataSource(this.paginator, this.sort);
    }
}
//# sourceMappingURL=__name@dasherize__.component.js.map