import { Injectable } from '@angular/core';
import { IProductInfo } from '../public-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgxOpayCashierCheckoutService {

  constructor(
    private readonly http: HttpClient
  ) { }

  beginPayment(payload: {
    productInfo: IProductInfo,
    publickey: string,
    merchantId: string,
    isProd: boolean
  }) {
      let headers = new HttpHeaders();

      headers = headers.append('Authorization', `Bearer ${payload.publickey}`);
      headers = headers.append('MerchantId', `${payload.merchantId}`);

      let cashierPaymentApi = 'https://liveapi.opaycheckout.com/api/v1/international/cashier/create';

      if(!payload.isProd) {
        cashierPaymentApi = 'https://testapi.opaycheckout.com/api/v1/international/cashier/create';
      }


      this.http.post(`${cashierPaymentApi}`, payload.productInfo, {headers})
      .subscribe({
        next: (res: any) => {
          if(res.code === '00000') {
            const windowFeatures = "left=100,top=100,width=320,height=320";
            window.open(res.data.cashierUrl, 'Opay-Cashier-Checkout', windowFeatures);
          }
          console.log(res)
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    }
}
