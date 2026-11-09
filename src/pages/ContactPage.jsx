import ContactForm from '../components/ContactForm.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';

function ContactPage() {
  usePageTitle('Contact us');

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <h1 className="mb-4 text-3xl font-medium">Contact us</h1>
        <p className="mb-6">Questions about an order, or not sure which plant suits your room? Send us a message.</p>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
          <dt className="font-medium">Email</dt>
          <dd>hello@leafmarket.example</dd>
          <dt className="font-medium">Phone</dt>
          <dd>+251 900 000 000</dd>
          <dt className="font-medium">Hours</dt>
          <dd>Monday to Saturday, 9:00 to 18:00</dd>
        </dl>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactPage;