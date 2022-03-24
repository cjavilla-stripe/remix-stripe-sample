import {useLoaderData} from 'remix';
import {retrievePaymentIntent} from '~/payments'

export const loader = async ({request}) => {
  const url = new URL(request.url);
  const paymentIntentId = url.searchParams.get('payment_intent');
  return await retrievePaymentIntent(paymentIntentId);
}

export default function Success() {
  const paymentIntent = useLoaderData()
  return (
    <div>
      <h1>Success</h1>
      <p>
        You have successfully paid for your order. Thank you for your
        purchase.
      </p>
      <p>
        PaymenIntent: {paymentIntent.status}
      </p>
    </div>
  );
}
