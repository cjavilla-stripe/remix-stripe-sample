import {useSubmit, Form} from 'remix'
import {PaymentElement, useStripe, useElements} from '@stripe/react-stripe-js';

export const action = async ({request}) => {
  const formData = await request.formData();
  console.log(formData);

  await confirmPayment(formData);

  return redirect("/pay/success");
}


export default function PayForm() {
  const submit = useSubmit();
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = async (event) => {
    event.preventDefault();

    if(!stripe || !elements) {
      console.log("Stripe or elements not loaded");
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/pay/success',
      }
    })

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      alert(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
    submit(event.currentTarget, { replace: true });
  }

  return (
    <Form method="post" onSubmit={handleChange}>
      <h1>Pay</h1>

      <PaymentElement />

      <p>
        <button type="submit">Pay</button>
      </p>
    </Form>
  );
}
