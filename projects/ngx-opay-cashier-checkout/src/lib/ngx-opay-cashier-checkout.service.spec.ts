import { TestBed } from '@angular/core/testing';

import { NgxOpayCashierCheckoutService } from './ngx-opay-cashier-checkout.service';

describe('NgxOpayCashierCheckoutService', () => {
  let service: NgxOpayCashierCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOpayCashierCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
