/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      transitionDuration: {
        2000: '2000ms',
        3000: '3000ms',
      },
      transitionDelay: {
        2000: '2000ms',
        3000: '3000ms',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
