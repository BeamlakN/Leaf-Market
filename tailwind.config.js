/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        page: '#F5F5F5',          // gray canvas behind the card
        brand: '#3A5B22',         // Signup button green
        'brand-dark': '#2C4619',  // hover state of brand
        ink: '#111111',           // headings and body text
        muted: '#6B6B6B',         // placeholders and helper text
        line: '#E6E6E6',          // input, divider and button borders
        link: '#0A59F7',          // "Sign in" link
        leaf: '#ECE8E5',          // fallback behind the plant photo
        danger: '#C5221F',        // validation errors
        success: '#1E7A3C',       // success message
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        panel: '1.5rem',          // rounded corners of the plant image
      },
      height: {
        field: '2.5rem',          // shared height of inputs and buttons
      },
      maxWidth: {
        form: '23.75rem',         // width of the form column
      },
    },
  },
  plugins: [],
};
