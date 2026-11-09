import FilterBar from '../components/FilterBar.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import { focusRing } from '../styles.js';

// All wording that differs between the Plants page and the Pots page lives here.
const PAGE_TEXT = {
  plant: {
    title: 'Plants',
    heading: 'Houseplants for every home',
    intro: 'Easy-care plants, grown with care and delivered to your door.',
    searchLabel: 'Search plants',
    searchPlaceholder: 'e.g. monstera',
    noun: 'plants',
  },
  pot: {
    title: 'Pots',
    heading: 'Pots and planters',
    intro: 'Give your plants a home that looks as good as they do.',
    searchLabel: 'Search pots',
    searchPlaceholder: 'e.g. ceramic',
    noun: 'pots',
  },
};

function CatalogPage({ type, filters, filtersDispatch, onAddToCart }) {
  const text = PAGE_TEXT[type];
  usePageTitle(text.title);

  const typeProducts = products.filter((product) => product.type === type);
  const categories = ['All', ...new Set(typeProducts.map((product) => product.category))];

  // The shared filter state may hold a category from the other page (for example "Foliage" on Pots).
  const activeCategory = categories.includes(filters.category) ? filters.category : 'All';

  const searchTerm = filters.search.trim().toLowerCase();
  const visibleProducts = typeProducts.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <h1 className="mb-2 text-3xl font-medium">{text.heading}</h1>
      <p className="mb-6">{text.intro}</p>

      <FilterBar
        filters={{ ...filters, category: activeCategory }}
        dispatch={filtersDispatch}
        categories={categories}
        searchLabel={text.searchLabel}
        searchPlaceholder={text.searchPlaceholder}
      />

      <p role="status" className="mb-4 text-sm text-muted">
        Showing {visibleProducts.length} of {typeProducts.length} {text.noun}
      </p>

      {visibleProducts.length === 0 ? (
        <div className="rounded-panel bg-leaf p-8 text-center">
          <p className="mb-3">
            No {text.noun} match “{filters.search}” in {activeCategory === 'All' ? 'any category' : activeCategory}. Try a different word or category.
          </p>
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