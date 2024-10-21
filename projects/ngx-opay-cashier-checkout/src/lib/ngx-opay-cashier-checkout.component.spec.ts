import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOpayCashierCheckoutComponent } from './ngx-opay-cashier-checkout.component';

describe('NgxOpayCashierCheckoutComponent', () => {
  let component: NgxOpayCashierCheckoutComponent;
  let fixture: ComponentFixture<NgxOpayCashierCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxOpayCashierCheckoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxOpayCashierCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
