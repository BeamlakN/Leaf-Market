# Leaf Market

Chosen option: B — Marketplace Product-Listing Page

Leaf Market is a responsive storefront for a small plant shop. It gives shoppers a simple way to browse products, filter by category, view detailed plant information, and add items to their cart. The app also includes a simulated checkout experience to demonstrate how a complete ecommerce flow can work on the front end. This project was built with React, Vite, Tailwind CSS, and React Router to keep the experience fast, accessible, and mobile-friendly.

- Live URL: [https://leaf-market-demo.vercel.app](https://leaf-market-xabg-chi.vercel.app/)
- GitHub URL: https://github.com/BeamlakN/leaf-market


## Features

- Plant and planter catalog with responsive product cards
- Search and category filtering with empty-state messaging
- Product detail pages for individual items
- Shopping cart with add, remove, and quantity updates
- Persistent cart state using `localStorage`
- Accessible checkout form with validation and confirmation flow
- Route-based pages for home, catalog, cart, thank-you, and 404 states

## Setup

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

The app runs at http://localhost:5173.

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

No environment variables or API keys are required for local development.

## Screenshots
<img width="546" height="502" alt="desktop_before" src="https://github.com/user-attachments/assets/cb82a7c3-ad23-43c2-8cea-7e9d10c17307" />
<img width="542" height="557" alt="finalpro" src="https://github.com/user-attachments/assets/999f4667-0d0b-4c39-b08c-854669796693" />


### Accessibility and performance issues fixed

- Added a skip link and improved keyboard focus states for better navigation accessibility
- Improved form labeling, validation messaging, and `aria` relationships in the checkout flow
- Increased visible contrast for text and interactive controls to meet accessibility expectations
- Reduced layout shifts and improved lazy-loading behavior for product images and route-level content
- Fixed navigation clarity and content ordering to provide a cleaner, more usable shopping experience

## Known limitations

- The checkout flow is simulated and does not connect to a real payment or order API
- Product imagery is demo content and would need real photography for a production storefront
- The app has no backend for inventory, customer accounts, or persistent order records
- There is no review, sorting, or advanced filtering system beyond the current catalog controls

## What I would build next

- Real product reviews and ratings
- Sorting by price, popularity, and newest arrivals
- Backend integration for inventory, checkout, and authentication
- Personalized recommendations and saved wishlists
- Better storefront analytics and admin tools for managing products

## Tech stack

- React
- Vite
- React Router
- Tailwind CSS
- JavaScript

## Project structure

```text
leaf-market/
├── public/
│   ├── images/
│   └── products/
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── App.jsx
│   ├── cartReducer.js
│   ├── checkoutReducer.js
│   ├── filtersReducer.js
│   ├── main.jsx
│   ├── styles.js
│   └── index.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── vercel.json
├── README.md
└── .gitignore
```
