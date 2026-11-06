import FilterBar from '../components/FilterBar.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import { focusRing } from '../styles.js';

function CatalogPage({ filters, filtersDispatch, onAddToCart }) {
  usePageTitle('Shop');

  const searchTerm = filters.search.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesCategory = filters.category === 'All' || product.category === filters.category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <h1 className="mb-2 text-3xl font-medium">Houseplants for every home</h1>
      <p className="mb-6">Easy-care plants, delivered to your door.</p>

      <FilterBar filters={filters} dispatch={filtersDispatch} />

      <p role="status" className="mb-4 text-sm text-muted">
        Showing {visibleProducts.length} of {products.length} plants
      </p>

      {visibleProducts.length === 0 ? (
        <div className="rounded-panel bg-leaf p-8 text-center">
          <p className="mb-3">No plants match “{filters.search}” in {filters.category === 'All' ? 'any category' : filters.category}. Try a different word or category.</p>
          <button type="button" onClick={() => filtersDispatch({ type: 'FILTERS_CLEARED' })} className={`rounded-lg border border-brand px-4 py-2 text-sm font-semibold text-brand hover:bg-white ${focusRing}`}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} priority={index < 4} />
          ))}
        </div>
      )}
    </>
  );
}

export default CatalogPage;
