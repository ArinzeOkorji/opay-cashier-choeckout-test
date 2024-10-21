import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxOpayCashierCheckoutService } from 'ngx-opay-cashier-checkout';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [NgxOpayCashierCheckoutService]
})
export class AppComponent {
  title = 'test-store';
  libService = inject(NgxOpayCashierCheckoutService);

  ngOnInit() {
    this.testLib();
  }

  testLib() {
    console.log('Hola')
    this.libService.beginPayment(
      {
        productInfo: {
          "amount": {
              "currency": "NGN",
              "total": 400
          },
          "callbackUrl": "https://google.com",
          "cancelUrl": "https://google.com",
          "country": "NG",
          "expireAt":300,
          "sn":"PE462xxxxxxxx",
          "payMethod":"BankCard",
          "product":{
              "description":"description",
              "name":"name",
          },
          "reference": "983541354914",
          "returnUrl": "https://google.com",
          "userInfo":{
                  "userEmail":"xxx@yopmaill.com",
                  "userId":"userid001",
                  "userMobile":"13056288895",
                  "userName":"xxx"
          }
        },
        merchantId: '256624100966997',
        publickey: 'OPAYPUB17284874439260.3689063486727464',
        isProd: environment.isProd
      }
    )
  }
}
