"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var sidenav_1 = require("@angular/material/sidenav");
classify(name) %  > Component;
from;
'./<%= dasherize(name) %>.component';
describe('<%= classify(name) %>Component', function () {
    var component;
     %  > Component;
    var fixture;
     << ;
    classify(name) %  > Component > ;
    beforeEach(testing_1.fakeAsync(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [sidenav_1.MatSidenavModule],
            declarations: [, classify(name) %  > Component]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(, classify(name) %  > Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=__name@dasherize__.component.spec.js.map