"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
var PurchasesComponent = /** @class */ (function () {
    function PurchasesComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.vendors = [
            { value: 'RamRao', viewValue: 'Ram' },
            { value: 'KrishnaRao', viewValue: 'Krishna' },
            { value: 'SubbaRao', viewValue: 'Subbu' }
        ];
        this.accounts = [
            { value: 'cash', viewValue: 'Cash' },
            { value: 'HDFC Checkings', viewValue: 'HDFC CHECKINGS' },
            { value: 'AXIS Checkings', viewValue: 'AXIS CHECKINGS' }
        ];
        this.students = [
            { value: 'ramesh', viewValue: 'Ramesh' },
            { value: 'suresh', viewValue: 'Suresh' },
            { value: 'ganesh', viewValue: 'Ganesh' }
        ];
        this.dataSource = new material_1.MatTableDataSource(ELEMENT_DATA);
        this.chartType = 'pie';
        this.chartData = [300, 50, 100, 40, 120];
        this.chartLabels = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];
        this.chartColors = [{
                hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
                hoverBorderWidth: 0,
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
            }];
        this.chartOptions = {
            responsive: true
        };
    }
    PurchasesComponent.prototype.chartClicked = function (e) { };
    PurchasesComponent.prototype.chartHovered = function (e) { };
    PurchasesComponent.prototype.ngOnInit = function () {
    };
    PurchasesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], PurchasesComponent.prototype, "paginator", void 0);
    PurchasesComponent = __decorate([
        core_1.Component({
            selector: 'app-purchases',
            templateUrl: './purchases.component.html',
            styleUrls: ['./purchases.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PurchasesComponent);
    return PurchasesComponent;
}());
exports.PurchasesComponent = PurchasesComponent;
//# sourceMappingURL=purchases.component.js.map