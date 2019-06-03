import { PayPalConfig, PayPalIntegrationType, PayPalEnvironment } from "ngx-paypal";
import { Component } from "@angular/core";
@Component({
    templateUrl: './payment.html',
  })
export class PaymentComponent{
    public payPalConfig?: PayPalConfig;

    ngOnInit(): void {
      this.initConfig();
    }

    private initConfig(): void {
      this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
        commit: true,
        client: {
          sandbox: 'Abv2dBDNobajnlYfAzm4SvrETht3ez0Sw0kGYoV7Qgors58T3uk35ky9in2Wy6GddQOY-nnnm_K_1pqt',
        },
        button: {
          label: 'paypal',
        },
        onPaymentComplete: (data, actions) => {
          console.log('OnPaymentComplete');
        },
        onCancel: (data, actions) => {
          console.log('OnCancel');
        },
        onError: (err) => {
          console.log('OnError');
        },
        transactions: [{
          amount: {
            currency: 'USD',
            total: 9
          }
        }]
      });
    }
}