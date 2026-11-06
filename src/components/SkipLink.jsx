import { focusRing } from '../styles.js';

// First focusable element on every page. Hidden until it receives keyboard focus.
function SkipLink() {
  return (
    <a
      href="#main-content"
      className={`sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-brand focus:shadow-lg ${focusRing}`}
    >
      Skip to main content
    </a>
  );
}

export default SkipLink;
