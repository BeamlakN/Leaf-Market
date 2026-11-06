import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton.jsx';
import { formatPrice } from '../utils.js';
import { focusRing } from '../styles.js';

// `priority` marks images that are visible on first load so they are not lazy-loaded.
function ProductCard({ product, onAddToCart, priority = false }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-panel border border-line">
      <img
        src={product.image}
        alt={product.alt}
        width="400"
        height="400"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="aspect-square w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs text-muted">{product.category}</p>
        <h2 className="text-lg font-medium">
          <Link to={`/products/${product.id}`} className={`rounded underline-offset-4 hover:underline ${focusRing}`}>
            {product.name}
          </Link>
        </h2>
        <p className="font-semibold">{formatPrice(product.price)}</p>
        <div className="mt-auto pt-2">
          <AddToCartButton product={product} onAdd={onAddToCart} />
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
