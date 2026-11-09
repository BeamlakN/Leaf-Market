import { useReducer } from 'react';
import TextField from './TextField.jsx';
import { formReducer, createFormState } from '../FormReducer.js';
import { validateCheckout } from '../validation.js';
import { focusRing } from '../styles.js';

// Stand-in for a real order API so every form state can be demonstrated.
// Use fail@example.com as the email to see the error state.
const INITIAL_VALUES = { name: '', email: '', address: '', delivery: 'standard', giftWrap: false };

function placeOrder({ email }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email.trim().toLowerCase() === 'fail@example.com') {
        reject(new Error('We couldn’t process your order. Please try again.'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

function CheckoutForm({ onOrderPlaced }) {
  const [state, dispatch] = useReducer(formReducer, INITIAL_VALUES, createFormState);
  const { values, touched, status, message } = state;

  const errors = validateCheckout(values);
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
      await placeOrder(values);
      dispatch({ type: 'SUBMIT_SUCCEEDED' });
      onOrderPlaced(values.name.trim());
    } catch (error) {
      dispatch({ type: 'SUBMIT_FAILED', message: error.message });
    }
  }

  const fieldProps = (name) => ({ name, value: values[name], error: visibleError(name), disabled: isSubmitting, onChange: handleChange, onBlur: handleBlur });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      <h2 className="text-xl font-medium">Checkout</h2>
      <TextField label="Full name" autoComplete="name" placeholder="Enter your full name" {...fieldProps('name')} />
      <TextField label="Email address" type="email" autoComplete="email" placeholder="Enter your email" {...fieldProps('email')} />
      <TextField label="Delivery address" autoComplete="street-address" placeholder="Street, city" {...fieldProps('address')} />

      <fieldset className="flex flex-col gap-2" disabled={isSubmitting}>
        <legend className="mb-1 text-sm font-medium">Delivery speed</legend>
        {[
          { value: 'standard', label: 'Standard (3-5 days)' },
          { value: 'express', label: 'Express (1-2 days)' },
        ].map((option) => (
          <label key={option.value} className="flex items-center gap-2 text-sm">
            <input type="radio" name="delivery" value={option.value} checked={values.delivery === option.value} onChange={handleChange} className={`h-4 w-4 accent-brand ${focusRing}`} />
            {option.label}
          </label>
        ))}
      </fieldset>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="giftWrap" checked={values.giftWrap} disabled={isSubmitting} onChange={handleChange} className={`h-4 w-4 accent-brand ${focusRing}`} />
        Add gift wrap
      </label>

      {status === 'error' && (
        <p role="alert" className="rounded-lg border border-danger bg-danger/10 px-3 py-2 text-sm text-danger">
          {message}
        </p>
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
        {isSubmitting ? 'Placing order…' : 'Place order'}
      </button>
    </form>
  );
}

export default CheckoutForm;