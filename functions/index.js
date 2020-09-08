
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const twilio = require('twilio')
const accountSid = functions.confiq().twilio.sid
const authToken = functions.confiq().twilio.token

const client = new twilio(accountSid, authToken);

const twilioNumber = '+14432965106'

const stripe = require('stripe')('sk_test_51H4gUlKdrQ4uHH7LsthM4aMEqMESsq6yx3Hu89YZsDhRJBVjYsxaaJtXqWwCplFvw6Pd6gDiQeuOzgDhlbnMTWvz00DXu3L1Gi');

exports.payWithStripe = functions.https.onRequest((request, response) => {
    // Set your secret key: remember to change this to your live secret key in production
    // See your keys here: https://dashboard.stripe.com/account/apikeys

    // eslint-disable-next-line promise/catch-or-return
    stripe.charges.create({
        amount: request.body.amount,
        currency: request.body.currency,
        source: request.body.token,
    }).then((charge) => {
            // asynchronously called
            return response.send(charge);
        })
        .catch(err =>{
            console.log(err);
        });

});


