import {Link} from 'remix'
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Stripe x Remix</h1>

      <Link to="/pay">Pay</Link>
    </div>
  );
}
