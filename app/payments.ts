import Stripe from 'stripe';

const stripe = new Stripe('sk_test_...')

export async function createPaymentIntent() {
  return await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    }
  })
}
