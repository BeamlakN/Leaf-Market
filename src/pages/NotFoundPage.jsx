import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle.js';
import { focusRing } from '../styles.js';

function NotFoundPage({ heading = '404: Page not found', message = 'The page you’re looking for doesn’t exist or has moved.' }) {
  usePageTitle('Page not found');

  return (
    <>
      <h1 className="mb-3 text-3xl font-medium">{heading}</h1>
      <p className="mb-4">{message}</p>
      <Link to="/" className={`rounded text-link underline ${focusRing}`}>
        Back to the home page
      </Link>
    </>
  );
}

export default NotFoundPage;