import { Link, useNavigate } from 'react-router-dom';
import CartItemRow from '../components/CartItemRow.jsx';
import CheckoutForm from '../components/CheckoutForm.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';
import { formatPrice } from '../utils.js';
import { focusRing } from '../styles.js';

function CartPage({ items, dispatch }) {
  const navigate = useNavigate();
  usePageTitle('Your cart');

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function handleOrderPlaced(customerName) {
    dispatch({ type: 'CLEAR_CART' });
    navigate('/thank-you', { state: { name: customerName } });
  }

  if (items.length === 0) {
    return (
      <>
        <h1 className="mb-3 text-3xl font-medium">Your cart is empty</h1>
        <p className="mb-4">Add a plant or two and they’ll show up here.</p>
        <Link to="/plants" className={`rounded text-link underline ${focusRing}`}>
          Browse plants
        </Link>
      </>
    );
  }

  return (
    <>
      <h1 className="mb-6 text-3xl font-medium">Your cart</h1>
      <div className="grid gap-10 lg:grid-cols-2">
        <section aria-label="Cart items">
          <ul>
            {items.map((item) => (
              <CartItemRow key={item.id} item={item} dispatch={dispatch} />
            ))}
          </ul>
          <p className="mt-4 flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </p>
        </section>
        <section aria-label="Checkout">
          <CheckoutForm onOrderPlaced={handleOrderPlaced} />
        </section>
      </div>
    </>
  );
}

export default CartPage;