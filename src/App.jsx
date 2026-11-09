import { lazy, Suspense, useEffect, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import SkipLink from './components/SkipLink.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import { cartReducer, loadCart, saveCart } from './cartReducer.js';
import { filtersReducer, initialFilters } from './filtersReducer.js';

// Each page is its own chunk, so the browser only downloads the page being visited.
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage.jsx'));
const CartPage = lazy(() => import('./pages/CartPage.jsx'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {
  // Cart and filters live here so the header, catalogue, detail and cart pages can all share them.
  const [cartItems, cartDispatch] = useReducer(cartReducer, [], loadCart);
  const [filters, filtersDispatch] = useReducer(filtersReducer, initialFilters);

  useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const addToCart = (product) => cartDispatch({ type: 'ADD_ITEM', product });

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <SkipLink />
      <SiteHeader cartCount={cartCount} />
      {/* tabIndex -1 lets the skip link move focus here without adding a tab stop. */}
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-6xl px-6 py-8 outline-none">
        <Suspense fallback={<p role="status">Loading page…</p>}>
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
            <Route path="/plants" element={<CatalogPage type="plant" filters={filters} filtersDispatch={filtersDispatch} onAddToCart={addToCart} />} />
            <Route path="/pots" element={<CatalogPage type="pot" filters={filters} filtersDispatch={filtersDispatch} onAddToCart={addToCart} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products/:productId" element={<ProductDetailPage onAddToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage items={cartItems} dispatch={cartDispatch} />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;