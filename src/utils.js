const priceFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export function formatPrice(amount) {
  return priceFormatter.format(amount);
}
