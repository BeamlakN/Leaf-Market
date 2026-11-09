import { Link } from 'react-router-dom';
import { aboutImage } from '../data/siteImages.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import { focusRing } from '../styles.js';

const values = [
  { title: 'Beginner friendly', text: 'We choose plants that are hard to kill and explain their care in plain language.' },
  { title: 'Honest descriptions', text: 'What you see is what you get, with clear light and watering needs.' },
  { title: 'Made to last', text: 'Our pots are chosen for drainage and durability, so your plants stay healthy.' },
];

function AboutPage() {
  usePageTitle('About');

  return (
    <>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-medium">About Leaf Market</h1>
          <p className="mb-3">
            Leaf Market started with a simple idea: everyone deserves a green home, even if they have never kept a plant alive.
          </p>
          <p className="mb-3">
            We grow and pick easy-care plants, pair them with pots that suit them, and share the care tips we wish we had known when we started.
          </p>
          <Link to="/contact" className={`inline-block rounded text-link underline ${focusRing}`}>
            Get in touch with us
          </Link>
        </div>
        <img src={aboutImage.src} alt={aboutImage.alt} width={aboutImage.width} height={aboutImage.height} className="w-full rounded-panel object-cover" />
      </div>

      <section className="mt-12" aria-labelledby="values-heading">
        <h2 id="values-heading" className="mb-4 text-2xl font-medium">What we care about</h2>
        <ul className="grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <li key={value.title} className="rounded-panel bg-leaf p-5">
              <h3 className="mb-1 text-lg font-medium">{value.title}</h3>
              <p>{value.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default AboutPage;