import { Component } from '@angular/core';
declare var Stripe;
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-stripe',
  templateUrl: 'stripe.page.html',
  styleUrls: ['stripe.page.scss'],
})
export class StripePage {
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

  payWithStripe() {
    this.stripe.setPublishableKey(this.stripe);

    this.cardDetails = {
      number: '4242424242424242',
      expMonth: 12,
      expYear: 2020,
      cvc: '220'
    }

    this.stripe.createCardToken(this.cardDetails)
      .then(token => {
        console.log(token);
        this.makePayment("src_1H5mdSKdrQ4uHH7LGVfxIw6S");
      })
      .catch(error => console.error(error));
  }

  makePayment(token) {
    this.http
    .post(
   'http://localhost:5000/budgetsavingapp/us-central1/payWithStripe', {
    amount: 100,
    currency: "usd",
    token: token.id
    })
    .subscribe(data => {
    console.log(data);
    
     //TODO:  Make receipt and send to firebase here
    });
   }
}