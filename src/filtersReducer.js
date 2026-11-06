export const initialFilters = { search: '', category: 'All' };

export function filtersReducer(state, action) {
  switch (action.type) {
    case 'SEARCH_CHANGED':
      return { ...state, search: action.value };
    case 'CATEGORY_CHANGED':
      return { ...state, category: action.value };
    case 'FILTERS_CLEARED':
      return initialFilters;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
