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
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var ELEMENT_DATA = [
    { position: '1', name: "Antony" },
    { position: '2', name: "Mark" },
    { position: '3', name: "John" },
    { position: '4', name: "Smith" },
    { position: '5', name: "Aby" },
    { position: '6', name: "Tony" },
    { position: '7', name: "Stark" },
    { position: '8', name: "Neil" },
    { position: '9', name: "Roger" },
    { position: '10', name: "Siddle" },
];
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.contactForm = new forms_1.FormGroup({
            isCompany: new forms_1.FormControl(),
            companyName: new forms_1.FormControl(),
            firstName: new forms_1.FormControl(),
            middleName: new forms_1.FormControl(),
            lastName: new forms_1.FormControl(),
            address: new forms_1.FormGroup({
                streetAddress: new forms_1.FormControl(),
                city: new forms_1.FormControl(),
                state: new forms_1.FormControl(),
                country: new forms_1.FormControl(),
                postalCode: new forms_1.FormControl(),
                landMark: new forms_1.FormControl(),
            }),
            homePhone: new forms_1.FormControl(),
            cellPhone: new forms_1.FormControl(),
            faxNumber: new forms_1.FormControl(),
            additionalComments: new forms_1.FormControl(),
        });
        this.displayedColumns = ['position', 'name'];
        this.dataSource = new material_1.MatTableDataSource(ELEMENT_DATA);
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    ContactsComponent.prototype.saveContact = function () {
        alert(this.contactForm.value.isCompany);
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], ContactsComponent.prototype, "paginator", void 0);
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map