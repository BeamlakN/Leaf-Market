export const initialCheckoutState = {
  values: { name: '', email: '', address: '', delivery: 'standard', giftWrap: false },
  touched: {},
  status: 'idle', // idle | submitting | success | error
  message: '',
};

export function checkoutReducer(state, action) {
  switch (action.type) {
    case 'FIELD_CHANGED':
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
        status: state.status === 'submitting' ? state.status : 'idle',
        message: '',
      };
    case 'FIELD_BLURRED':
      return { ...state, touched: { ...state.touched, [action.field]: true } };
    case 'SUBMIT_STARTED':
      return { ...state, status: 'submitting', message: '' };
    case 'SUBMIT_SUCCEEDED':
      return { ...initialCheckoutState, status: 'success' };
    case 'SUBMIT_FAILED':
      return { ...state, status: 'error', message: action.message };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
