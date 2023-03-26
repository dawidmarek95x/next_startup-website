/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#212529',
        accent: '#74C69D',
      },
      fill: {
        dark: '#212529',
        accent: '#74C69D',
      },
    },
    screens: {
      xxs: '320px',
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1440px',
    },
  },
  plugins: [],
};
