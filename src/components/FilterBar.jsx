import { focusRing } from '../styles.js';

function FilterBar({ filters, dispatch, categories, searchLabel, searchPlaceholder }) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-1.5 md:w-80">
        <label htmlFor="product-search" className="text-sm font-medium">
          {searchLabel}
        </label>
        <input
          id="product-search"
          type="search"
          value={filters.search}
          placeholder={searchPlaceholder}
          onChange={(event) => dispatch({ type: 'SEARCH_CHANGED', value: event.target.value })}
          className={`h-field w-full rounded-lg border border-line px-3 text-sm placeholder:text-muted ${focusRing}`}
        />
      </div>

      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isSelected = filters.category === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isSelected}
              onClick={() => dispatch({ type: 'CATEGORY_CHANGED', value: category })}
              className={`h-field rounded-full border px-4 text-sm transition ${focusRing} ${
                isSelected ? 'border-brand bg-brand text-white' : 'border-line hover:border-brand'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBar;