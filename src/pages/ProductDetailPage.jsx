import { Link, useParams } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import { products } from '../data/products.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import { formatPrice } from '../utils.js';
import { focusRing } from '../styles.js';

function ProductDetailPage({ onAddToCart }) {
  const { productId } = useParams();
  const product = products.find((item) => String(item.id) === productId);

  usePageTitle(product ? product.name : 'Plant not found');

  // An unknown id such as /products/999 gets the same 404 page as any unknown URL.
  if (!product) {
    return <NotFoundPage heading="404: Plant not found" message="We couldn’t find that plant. It may have been removed." />;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <img src={product.image} alt={product.alt} width="400" height="400" className="w-full rounded-panel" />
      <div className="flex flex-col gap-3">
        <p className="text-sm text-muted">{product.category}</p>
        <h1 className="text-3xl font-medium">{product.name}</h1>
        <p className="text-2xl font-semibold">{formatPrice(product.price)}</p>
        <p>{product.description}</p>
        <div className="mt-2">
          <AddToCartButton product={product} onAdd={onAddToCart} />
        </div>
        <Link to="/" className={`mt-4 inline-block w-fit rounded text-link underline ${focusRing}`}>
          Back to the shop
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailPage;
