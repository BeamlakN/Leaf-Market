import { useReducer } from 'react';
import TextField from './TextField.jsx';
import { formReducer, createFormState } from '../FormReducer.js';
import { validateContact } from '../validation.js';
import { focusRing } from '../styles.js';

const INITIAL_VALUES = { name: '', email: '', topic: '', message: '', newsletter: false };
const TOPICS = ['Order help', 'Plant care advice', 'Wholesale', 'Something else'];

// Stand-in for a real email service. Use fail@example.com to see the error state.
function sendMessage({ email }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email.trim().toLowerCase() === 'fail@example.com') {
        reject(new Error('Your message could not be sent. Please try again.'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

function ContactForm() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_VALUES, createFormState);
  const { values, touched, status, message } = state;

  const errors = validateContact(values);
  const isValid = Object.keys(errors).length === 0;
  const isSubmitting = status === 'submitting';
  const visibleError = (field) => (touched[field] ? errors[field] : undefined);

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    dispatch({ type: 'FIELD_CHANGED', field: name, value: type === 'checkbox' ? checked : value });
  }

  function handleBlur(event) {
    dispatch({ type: 'FIELD_BLURRED', field: event.target.name });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isValid || isSubmitting) return;

    dispatch({ type: 'SUBMIT_STARTED' });
    try {
      await sendMessage(values);
      dispatch({ type: 'SUBMIT_SUCCEEDED' });
    } catch (error) {
      dispatch({ type: 'SUBMIT_FAILED', message: error.message });
    }
  }

  const fieldProps = (name) => ({ name, value: values[name], error: visibleError(name), disabled: isSubmitting, onChange: handleChange, onBlur: handleBlur });
  const topicError = visibleError('topic');

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      <TextField label="Name" autoComplete="name" placeholder="Enter your name" {...fieldProps('name')} />
      <TextField label="Email address" type="email" autoComplete="email" placeholder="Enter your email" {...fieldProps('email')} />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="topic" className="text-sm font-medium">Topic</label>
        <select
          id="topic"
          name="topic"
          value={values.topic}
          required
          disabled={isSubmitting}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(topicError)}
          aria-describedby={topicError ? 'topic-error' : undefined}
          className={`h-field w-full rounded-lg border bg-white px-3 text-sm disabled:cursor-not-allowed disabled:bg-page ${focusRing} ${topicError ? 'border-danger' : 'border-line'}`}
        >
          <option value="">Choose a topic</option>
          {TOPICS.map((topic) => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
        {topicError && <p id="topic-error" role="alert" className="text-xs text-danger">{topicError}</p>}
      </div>

      <TextField label="Message" multiline placeholder="How can we help?" {...fieldProps('message')} />

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="newsletter" checked={values.newsletter} disabled={isSubmitting} onChange={handleChange} className={`h-4 w-4 accent-brand ${focusRing}`} />
        Send me plant care tips by email
      </label>

      {status === 'success' && (
        <p role="status" className="rounded-lg border border-success bg-success/10 px-3 py-2 text-sm text-success">
          Thank you! Your message has been sent. We will reply within two working days.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="rounded-lg border border-danger bg-danger/10 px-3 py-2 text-sm text-danger">{message}</p>
      )}

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className={`flex h-field w-full items-center justify-center gap-2 rounded-lg bg-brand text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50 ${focusRing}`}
      >
        {isSubmitting && (
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="4" />
            <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        )}
        {isSubmitting ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}

export default ContactForm;
