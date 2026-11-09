import { NavLink } from 'react-router-dom';
import { focusRingOnDark } from '../styles.js';

function SiteHeader({ cartCount }) {
  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/plants', label: 'Plants', end: false },
    { to: '/pots', label: 'Pots', end: false },
    { to: '/about', label: 'About', end: false },
    { to: '/contact', label: 'Contact', end: false },
    { to: '/cart', label: `Cart (${cartCount})`, end: false, ariaLabel: `Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}` },
  ];

  return (
    <header className="bg-brand text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xl font-semibold">Leaf Market</p>
        {/* NavLink adds aria-current="page" to the active link automatically. */}
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  aria-label={item.ariaLabel}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2 text-sm font-medium transition ${focusRingOnDark} ${
                      isActive ? 'bg-white text-brand' : 'text-white hover:bg-brand-dark'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;