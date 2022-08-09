/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'banner-color': '#7B72FE',
        'main-button-color': '#ED7138',
      },
      width: {
        '11/12': '96%',
      },
      height: {
        banner: '680px',
      },
      lineHeight: {
        title: '70px',
      },
      screens: {
        '2xl': '1921px',
      },
      scale: {
        2: '1.2',
      },
      boxShadow: {
        mainShadow: '0px 18px 20px -24px rgba(237, 113, 56, 0.5)',
      },
    },
    fontSize: {
      title: '54px',
      subtext: '30px',
      '18px': '18px',
    },
    borderRadius: {
      none: '0',
      lg: '25px',
      button: '51px',
    },
  },
  plugins: [],
};
