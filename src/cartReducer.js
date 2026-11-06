const CART_STORAGE_KEY = 'leaf-market-cart';

// localStorage can be blocked or hold bad data, so fall back to an empty cart.
export function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

export function saveCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    // The cart still works for this visit; it just won't be remembered.
  }
}

export function cartReducer(items, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product } = action;
      const exists = items.some((item) => item.id === product.id);
      if (exists) {
        return items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...items, { id: product.id, name: product.name, price: product.price, image: product.image, alt: product.alt, quantity: 1 }];
    }
    case 'REMOVE_ITEM':
      return items.filter((item) => item.id !== action.id);
    case 'CHANGE_QUANTITY':
      // Going below 1 removes the line instead of leaving a zero-quantity row.
      if (action.quantity < 1) return items.filter((item) => item.id !== action.id);
      return items.map((item) => (item.id === action.id ? { ...item, quantity: action.quantity } : item));
    case 'CLEAR_CART':
      return [];
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
