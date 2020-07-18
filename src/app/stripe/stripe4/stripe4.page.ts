import { Component } from '@angular/core';
declare var Stripe;
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-stripe4',
  templateUrl: 'stripe4.page.html',
  styleUrls: ['stripe4.page.scss'],
})
export class Stripe4Page {
  stripe = Stripe('pk_test_51H4gUlKdrQ4uHH7Ld6KP3q0NwwHICvj3l8gmYZaOK05nW33AVT0gYLXxnS9TPgrFErjde9Yy0NmVtbaNxEtYFIwZ00OLwtRKHg');
  card: any;
  paymentAmount: string= '14.99';
  currency: string ='SGD';
  currencyIcon: string ='$';
  cardDetails: any = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.setupStripe();
  }

  setupStripe() {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });
    console.log(this.card);
    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log(event)

      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          console.log(result);
          this.makePayment(result);
        }
      });
    });
  }

  makePayment(token) {
    this.http
      .post('', {
        token: token.id
      })
      .subscribe(data => {
       console.log(data);
     });
  }

}