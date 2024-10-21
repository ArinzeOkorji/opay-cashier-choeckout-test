import { Component, inject, viewChild, ViewChild } from '@angular/core';
import { NgxOpayCashierCheckoutService } from './ngx-opay-cashier-checkout.service';
import { IProductInfo } from '../public-api';

@Component({
  selector: 'lib-ngx-opay-cashier-checkout',
  standalone: true,
  imports: [],
  template: `
    <p>
      ngx-opay-cashier-checkout works!
    </p>
  `,
  styles: ``
})
export class NgxOpayCashierCheckoutComponent {
  checkoutService = inject(NgxOpayCashierCheckoutService);

  beginPayment(
    productInfo: IProductInfo,
    publickey: string,
    merchantId: string,
    isProd: boolean
  ) {
    this.checkoutService.beginPayment(
    {
      productInfo,
    publickey,
    merchantId,
    isProd
    }
    )
  }
}
