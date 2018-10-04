import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndServicesComponent } from './productandservices.component';

describe('ProductsAndServicesComponent', () => {
  let component: ProductsAndServicesComponent;
  let fixture: ComponentFixture<ProductsAndServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsAndServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
