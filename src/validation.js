const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Returns error messages keyed by field name. An empty object means the form is valid.
export function validateCheckout(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.address.trim().length < 5) errors.address = 'Please enter your delivery address.';
  return errors;
}

export function validateContact(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.topic) errors.topic = 'Please choose a topic.';
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters.';
  return errors;
}