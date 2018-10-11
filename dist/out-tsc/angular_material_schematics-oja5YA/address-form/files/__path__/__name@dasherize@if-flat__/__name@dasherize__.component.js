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
var forms_1 = require("@angular/forms");
if (inlineTemplate) {
     %  >
        template;
    "\n    <form [formGroup]=\"addressForm\" novalidate>\n    <mat-card class=\"shipping-card\">\n      <mat-card-header>\n        <mat-card-title>Shipping Information</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Company\" formControlName=\"company\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"First name\" formControlName=\"firstName\">\n              <mat-error *ngIf=\"addressForm.controls['firstName'].hasError('required')\">\n                First name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Last name\" formControlName=\"lastName\">\n              <mat-error *ngIf=\"addressForm.controls['lastName'].hasError('required')\">\n                Last name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <textarea matInput placeholder=\"Address\" formControlName=\"address\"></textarea>\n              <mat-error *ngIf=\"addressForm.controls['address'].hasError('required')\">\n                Address is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!hasUnitNumber\">\n          <div class=\"col\">\n            <button mat-button type=\"button\" (click)=\"hasUnitNumber = !hasUnitNumber\">\n              + Add C/O, Apt, Suite, Unit\n            </button>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"hasUnitNumber\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"City\" formControlName=\"city\">\n              <mat-error *ngIf=\"addressForm.controls['city'].hasError('required')\">\n                City is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <mat-select placeholder=\"State\" formControlName=\"state\">\n                <mat-option *ngFor=\"let state of states\" [value]=\"state.abbreviation\">\n                  {{ state.name }}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"addressForm.controls['state'].hasError('required')\">\n                State is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" type=\"number\" formControlName=\"postalCode\">\n              <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-radio-group formControlName=\"shipping\">\n              <mat-radio-button value=\"free\">Free Shipping</mat-radio-button>\n              <mat-radio-button value=\"priority\">Priority Shipping</mat-radio-button>\n              <mat-radio-button value=\"nextday\">Next Day Shipping</mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n  ",  % ;
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
        "\n      .full-width {\n        width: 100%;\n      }\n      \n      .shipping-card {\n        min-width: 120px;\n        margin: 20px auto;\n      }\n      \n      .mat-radio-button {\n        display: block;\n        margin: 5px 0;\n      }\n      \n      .row {\n        display: flex;\n        flex-direction: row;\n      }\n      \n      .col {\n        flex: 1;\n        margin-right: 20px;\n      }\n      \n      .col:last-child {\n        margin-right: 0;\n      }\n    "
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
    addressForm = this.fb.group({
        company: null,
        firstName: [null, forms_1.Validators.required],
        lastName: [null, forms_1.Validators.required],
        address: [null, forms_1.Validators.required],
        address2: null,
        city: [null, forms_1.Validators.required],
        state: [null, forms_1.Validators.required],
        postalCode: [null, forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(5)],
        shipping: ['free', forms_1.Validators.required]
    });
    hasUnitNumber = false;
    states = [
        { name: 'Alabama', abbreviation: 'AL' },
        { name: 'Alaska', abbreviation: 'AK' },
        { name: 'American Samoa', abbreviation: 'AS' },
        { name: 'Arizona', abbreviation: 'AZ' },
        { name: 'Arkansas', abbreviation: 'AR' },
        { name: 'California', abbreviation: 'CA' },
        { name: 'Colorado', abbreviation: 'CO' },
        { name: 'Connecticut', abbreviation: 'CT' },
        { name: 'Delaware', abbreviation: 'DE' },
        { name: 'District Of Columbia', abbreviation: 'DC' },
        { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
        { name: 'Florida', abbreviation: 'FL' },
        { name: 'Georgia', abbreviation: 'GA' },
        { name: 'Guam', abbreviation: 'GU' },
        { name: 'Hawaii', abbreviation: 'HI' },
        { name: 'Idaho', abbreviation: 'ID' },
        { name: 'Illinois', abbreviation: 'IL' },
        { name: 'Indiana', abbreviation: 'IN' },
        { name: 'Iowa', abbreviation: 'IA' },
        { name: 'Kansas', abbreviation: 'KS' },
        { name: 'Kentucky', abbreviation: 'KY' },
        { name: 'Louisiana', abbreviation: 'LA' },
        { name: 'Maine', abbreviation: 'ME' },
        { name: 'Marshall Islands', abbreviation: 'MH' },
        { name: 'Maryland', abbreviation: 'MD' },
        { name: 'Massachusetts', abbreviation: 'MA' },
        { name: 'Michigan', abbreviation: 'MI' },
        { name: 'Minnesota', abbreviation: 'MN' },
        { name: 'Mississippi', abbreviation: 'MS' },
        { name: 'Missouri', abbreviation: 'MO' },
        { name: 'Montana', abbreviation: 'MT' },
        { name: 'Nebraska', abbreviation: 'NE' },
        { name: 'Nevada', abbreviation: 'NV' },
        { name: 'New Hampshire', abbreviation: 'NH' },
        { name: 'New Jersey', abbreviation: 'NJ' },
        { name: 'New Mexico', abbreviation: 'NM' },
        { name: 'New York', abbreviation: 'NY' },
        { name: 'North Carolina', abbreviation: 'NC' },
        { name: 'North Dakota', abbreviation: 'ND' },
        { name: 'Northern Mariana Islands', abbreviation: 'MP' },
        { name: 'Ohio', abbreviation: 'OH' },
        { name: 'Oklahoma', abbreviation: 'OK' },
        { name: 'Oregon', abbreviation: 'OR' },
        { name: 'Palau', abbreviation: 'PW' },
        { name: 'Pennsylvania', abbreviation: 'PA' },
        { name: 'Puerto Rico', abbreviation: 'PR' },
        { name: 'Rhode Island', abbreviation: 'RI' },
        { name: 'South Carolina', abbreviation: 'SC' },
        { name: 'South Dakota', abbreviation: 'SD' },
        { name: 'Tennessee', abbreviation: 'TN' },
        { name: 'Texas', abbreviation: 'TX' },
        { name: 'Utah', abbreviation: 'UT' },
        { name: 'Vermont', abbreviation: 'VT' },
        { name: 'Virgin Islands', abbreviation: 'VI' },
        { name: 'Virginia', abbreviation: 'VA' },
        { name: 'Washington', abbreviation: 'WA' },
        { name: 'West Virginia', abbreviation: 'WV' },
        { name: 'Wisconsin', abbreviation: 'WI' },
        { name: 'Wyoming', abbreviation: 'WY' }
    ];
    constructor(private, fb, forms_1.FormBuilder);
    { }
    onSubmit();
    {
        alert('Thanks!');
    }
}
//# sourceMappingURL=__name@dasherize__.component.js.map