/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#74C69D',
      },
      fill: {
        dark: '#212529',
        accent: '#74C69D',
      },
      backgroundColor: {
        dark: '#212529',
        accent: '#74C69D',
      },
      boxShadow: {
        'person-card': '3px 4px 12px 1px rgba(0, 0, 0, 0.25)',
      },
      backgroundSize: {
        'size-200': '200%',
      },
      gridTemplateAreas: {
        'hero-mobile': ['image', 'texts'],
        'hero-tablet': ['texts image'],
      },
      gridTemplateRows: {
        'hero-mobile': 'min-content 1fr',
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
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
