import { useEffect, useState } from 'react';
import { focusRing } from '../styles.js';

function AddToCartButton({ product, onAdd }) {
  const [justAdded, setJustAdded] = useState(false);

  // Reset the "Added" confirmation after a moment; clean up if the component unmounts first.
  useEffect(() => {
    if (!justAdded) return undefined;
    const timer = setTimeout(() => setJustAdded(false), 1500);
    return () => clearTimeout(timer);
  }, [justAdded]);

  function handleClick() {
    onAdd(product);
    setJustAdded(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Add ${product.name} to cart`}
        className={`h-field rounded-lg bg-brand px-4 text-sm font-semibold text-white transition hover:bg-brand-dark ${focusRing}`}
      >
        {justAdded ? 'Added ✓' : 'Add to cart'}
      </button>
      {/* Announces the change to screen reader users, who can't see the button text change. */}
      <span role="status" className="sr-only">
        {justAdded ? `${product.name} added to cart` : ''}
      </span>
    </>
  );
}

export default AddToCartButton;
