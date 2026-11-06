import { Link, useLocation } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle.js';
import { focusRing } from '../styles.js';

function ThankYouPage() {
  const { state } = useLocation();
  usePageTitle('Thank you');

  const name = state?.name;

  return (
    <>
      <h1 className="mb-3 text-3xl font-medium">{name ? `Thank you, ${name}!` : 'Thank you!'}</h1>
      <p className="mb-6">Your order is confirmed. We’ll email you the delivery details.</p>
      <Link to="/" className={`inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark ${focusRing}`}>
        Keep shopping
      </Link>
    </>
  );
}

export default ThankYouPage;
