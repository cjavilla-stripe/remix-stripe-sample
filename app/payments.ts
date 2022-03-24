import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51EceeUCZ6qsJgndJDSi5feJtMJs4e4SOOQL7TIGtQyIA7GsyJczBvxvrFsuB71OkREXySaFDzcjLYb2IoDmuX1jL00e4sdsH5H');

export async function createPaymentIntent() {
  return await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    }
  })
}

export async function retrievePaymentIntent(id) {
  return await stripe.paymentIntents.retrieve(id);
}
