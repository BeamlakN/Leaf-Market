# Leaf Market

**Chosen option:** B, Marketplace Product-Listing Page

Leaf Market is a small plant shop built with React, Vite and Tailwind CSS. Visitors can search and filter 12 plants, open a product page, add plants to a cart and place a simulated order. The cart, filters and checkout form are managed with `useReducer`, and the app was checked for keyboard use, contrast, responsiveness and performance.

- **Live URL:** TODO: paste your Vercel or Netlify link
- **GitHub URL:** TODO: paste your repository link

## Setup

    npm install
    npm run dev        # run locally at http://localhost:5173
    npm run build      # production build in dist/
    npm run preview    # serve the build at http://localhost:4173

No environment variables or API keys are needed. `.env` files are listed in `.gitignore`.

## Features

- Responsive product grid (12 products) with image, name, price and an add-to-cart button
- Search and category filter, with a helpful empty state and a "Clear filters" button
- Product detail route `/products/:productId`; unknown ids and unknown URLs show a 404 page
- Cart with add, remove and change-quantity actions, and a live item count in the navigation (saved in `localStorage`)
- Checkout form with controlled inputs (text, radio group, checkbox), validation, and idle, submitting, success and error states
- Thank-you page after a successful order

Tip: use `fail@example.com` as the checkout email to see the error state.

## How it is built

| Topic | Where |
|---|---|
| Routes (`/`, `/products/:productId`, `/cart`, `/thank-you`, `*`) | `src/App.jsx` |
| Cart state with `useReducer` (add, remove, change quantity, clear) | `src/cartReducer.js` |
| Filter state with `useReducer`, lifted to `App` | `src/filtersReducer.js` |
| Checkout form state with `useReducer` | `src/checkoutReducer.js` |
| Reusable components receiving props | `src/components/` |
| Theme tokens (colors, font, radius, sizes) | `tailwind.config.js` |
| Shared focus styles | `src/styles.js` |
| Refresh on any route works on the host | `vercel.json` and `public/_redirects` |

Styling uses Tailwind utility classes only. `src/index.css` contains just the three Tailwind directives.

## Screenshots

| Mobile (375px) | Desktop (1280px) |
|---|---|
| ![Mobile home page](docs/mobile-home.png) | ![Desktop home page](docs/desktop-home.png) |
| ![Mobile cart](docs/mobile-cart.png) | ![Desktop cart](docs/desktop-cart.png) |

## Accessibility

- Skip link is the first focusable element on every page
- Every link, button and input shows a visible focus ring
- Active navigation link is highlighted and has `aria-current="page"`
- Form fields have labels, `autocomplete` hints, and error messages linked with `aria-describedby`
- Cart changes are announced to screen readers with `role="status"`
- Each page sets its own document title
- Images have meaningful `alt` text; text colors meet the 4.5:1 AA contrast ratio

## Performance

- Every route is lazy-loaded with `React.lazy` and `Suspense`
- Product images have `width` and `height`, and images below the fold use `loading="lazy"`

## Lighthouse results (live site, Mobile)

| Page | Performance before | Performance after | Accessibility before | Accessibility after |
|---|---|---|---|---|
| `/` | TODO | TODO | TODO | TODO |
| `/products/1` | TODO | TODO | TODO | TODO |

Screenshots: `docs/lighthouse-before.png` and `docs/lighthouse-after.png`.

### Issues fixed

| Issue | Rule / WCAG | Fix |
|---|---|---|
| TODO: copy from your Lighthouse report | TODO | TODO |
| TODO | TODO | TODO |

## Git workflow

Work was done on feature branches (`feature/layout-and-routing`, `feature/product-catalogue`, `feature/cart-and-checkout`) and merged into `main` through pull requests. Pushes to `main` redeploy the site automatically.

## Known limitations and next steps

- Product images are placeholder illustrations and should be replaced with real photos.
- Checkout is simulated: there is no payment or real order API.
- Next: product reviews, sorting by price, and a real backend.
