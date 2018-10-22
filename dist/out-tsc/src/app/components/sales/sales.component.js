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
// Must import to use Forms functionality  
var forms_1 = require("@angular/forms");
var ELEMENT_DATA = [
    { id: 1, type: 'Electronics', name: 'Dell Laptop', price: 50000, quantity: '4' },
    { id: 2, type: 'Furniture', name: 'Tables', price: 2000, quantity: '50' },
    { id: 3, type: 'Food', name: 'Chicken', price: 700, quantity: '10' },
    { id: 4, type: 'Real Estate', name: 'Land', price: 1345888, quantity: '1' },
];
exports.Products = [];
var SalesComponent = /** @class */ (function () {
    function SalesComponent(fb) {
        this.fb = fb;
        //productItems: any[];
        this.displayedColumns = ['type', 'name', 'price', 'quantity', 'actions'];
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
        this.productItems = [{ name: '', type: '', quantity: 0, price: '' }];
        this.productObj = {};
        this.dataSource = new material_1.MatTableDataSource(ELEMENT_DATA);
        this.personType = '';
        this.personTypeValue = '';
    }
    SalesComponent.prototype.ngOnInit = function () {
        // To initialize FormGroup  
        this.salesForm = this.fb.group({
            personType: [null, forms_1.Validators.required],
            personTypeValue: [null, forms_1.Validators.required],
            productInfo: this.fb.group(this.buildProductList())
        });
        //this.productItems = Products.filter(productItem => productItem);    
        this.addNewProduct();
    };
    SalesComponent.prototype.buildProductList = function () {
        var _this = this;
        var arr = this.productItems.map(function (product) {
            return _this.fb.control(product);
        });
        return this.fb.array(arr);
    };
    SalesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    SalesComponent.prototype.addNewProduct = function () {
        var _this = this;
        //this.productItems.push(this.product);
        var control = this.salesForm.controls.productInfo;
        this.productItems.forEach(function (x) {
            control.push(_this.fb.group({
                name: x.name,
                type: x.type,
                quantity: x.quantity,
                price: x.price,
            }));
        });
        //this.productItems = this.salesForm.get('productInfo') as FormArray;
        //this.productItems.push(this.createItem());
    };
    SalesComponent.prototype.removeProduct = function (index) {
        this.productItems.splice(index, 1);
    };
    SalesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    SalesComponent.prototype.editSaleItem = function (saleItem) {
        console.log(saleItem);
        this.productObj = saleItem;
    };
    // Executed When Form Is Submitted  
    SalesComponent.prototype.onFormSubmit = function (form) {
        console.log(form);
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], SalesComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], SalesComponent.prototype, "sort", void 0);
    SalesComponent = __decorate([
        core_1.Component({
            selector: 'app-sales',
            templateUrl: './sales.component.html',
            styleUrls: ['./sales.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], SalesComponent);
    return SalesComponent;
}());
exports.SalesComponent = SalesComponent;
//# sourceMappingURL=sales.component.js.map