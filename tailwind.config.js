/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        txtPrimary: 'var(--clr-black)',
        txtSecondary: 'var(--clr-txt-secondary)',
        accPrimary: 'var(--clr-acc-primary)',
        accSecondary: 'var(--clr-acc-secondary)',
        accTertiary: 'var(--clr-acc-tertiary)',
        bgPrimary: 'var(--clr-bg-primary)',
        bgSecondary: 'var(--clr-bg-primary)',
        Gray: 'var(--clr-gray)'
      }
    },
  },
  plugins: [],
};
