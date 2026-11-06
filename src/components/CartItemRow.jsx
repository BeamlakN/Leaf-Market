import { formatPrice } from '../utils.js';
import { focusRing } from '../styles.js';

const stepButtonClass = `h-9 w-9 rounded-lg border border-line text-lg leading-none hover:border-brand ${focusRing}`;

function CartItemRow({ item, dispatch }) {
  return (
    <li className="flex gap-4 border-b border-line py-4">
      <img src={item.image} alt={item.alt} width="400" height="400" loading="lazy" className="h-20 w-20 rounded-lg object-cover" />
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex justify-between gap-2">
          <p className="font-medium">{item.name}</p>
          <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className={stepButtonClass} aria-label={`Decrease quantity of ${item.name}`} onClick={() => dispatch({ type: 'CHANGE_QUANTITY', id: item.id, quantity: item.quantity - 1 })}>
            −
          </button>
          <span aria-live="polite" aria-label={`Quantity of ${item.name}`} className="w-8 text-center">
            {item.quantity}
          </span>
          <button type="button" className={stepButtonClass} aria-label={`Increase quantity of ${item.name}`} onClick={() => dispatch({ type: 'CHANGE_QUANTITY', id: item.id, quantity: item.quantity + 1 })}>
            +
          </button>
          <button type="button" className={`ml-auto rounded text-sm text-danger underline ${focusRing}`} aria-label={`Remove ${item.name} from cart`} onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItemRow;
