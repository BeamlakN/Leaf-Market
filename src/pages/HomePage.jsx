import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';
import { heroImage } from '../data/siteImages.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import { focusRing } from '../styles.js';

const featuredIds = [1, 10, 15, 17];
const benefits = [
  { title: 'Healthy plants', text: 'Every plant is checked and packed carefully before it leaves us.' },
  { title: 'Care guidance', text: 'Each product page tells you what your plant needs to thrive.' },
  { title: 'Pots to match', text: 'Pick a planter in the same order and skip the repotting hunt.' },
];

function SectionCard({ product, to, title, text }) {
  return (
    <Link to={to} className={`group block overflow-hidden rounded-panel border border-line ${focusRing}`}>
      <img src={product.image} alt="" width="400" height="400" loading="lazy" className="aspect-[2/1] w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-medium group-hover:underline">{title}</h3>
        <p className="mt-1">{text}</p>
      </div>
    </Link>
  );
}

function HomePage({ onAddToCart }) {
  usePageTitle('Home');
  const featured = featuredIds.map((id) => products.find((product) => product.id === id));
  const firstPlant = products.find((product) => product.type === 'plant');
  const firstPot = products.find((product) => product.type === 'pot');

  return (
    <>
      <section className="grid items-center gap-8 rounded-panel bg-leaf p-6 md:grid-cols-2 md:p-10">
        <div>
          <h1 className="text-3xl font-medium md:text-4xl">Easy plants. Beautiful pots. One friendly shop.</h1>
          <p className="mt-3 max-w-md">Find plants that forgive mistakes and pots that make them look great, delivered to your door.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/plants" className={`rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark ${focusRing}`}>
              Shop plants
            </Link>
            <Link to="/pots" className={`rounded-lg border border-brand px-5 py-2.5 text-sm font-semibold text-brand hover:bg-white ${focusRing}`}>
              Shop pots
            </Link>
          </div>
        </div>
        {/* The hero is the first thing visible, so it loads eagerly and gets high priority. */}
        <img src={heroImage.src} alt={heroImage.alt} width={heroImage.width} height={heroImage.height} fetchpriority="high" className="w-full rounded-panel object-cover" />
      </section>

      <section className="mt-12" aria-labelledby="shop-heading">
        <h2 id="shop-heading" className="mb-4 text-2xl font-medium">Shop by section</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard product={firstPlant} to="/plants" title="Plants" text="Foliage, succulents, flowering and hanging plants." />
          <SectionCard product={firstPot} to="/pots" title="Pots" text="Terracotta, ceramic and hanging planters." />
        </div>
      </section>

      <section className="mt-12" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="mb-4 text-2xl font-medium">Customer favorites</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="why-heading">
        <h2 id="why-heading" className="mb-4 text-2xl font-medium">Why Leaf Market</h2>
        <ul className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="rounded-panel bg-leaf p-5">
              <h3 className="mb-1 text-lg font-medium">{benefit.title}</h3>
              <p>{benefit.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default HomePage;