import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackLighter:'#131313',
        primary: '#10a37f',
        secondary: '#075c48',
        white: '#fff',
        primaryLight: '#F8F8F8',
        primaryDark: '#222222',
        secondaryLight: '#dbdbdb',
        secondaryLightActive: '#adadad',
        secondaryDark: '#ececec',
        secondaryDarkShadow: 'rgba(0, 0, 0, 0.16)',
        textColor: '#7BBA81',
        special: '#d2af7a',
        ternary: '#c4c9d3',
        error: '#e74c3c',
        nextButton: 'rgb(242, 78, 9)',
        maxPageWidth: '110rem', // You may use this in custom spacing or max-width utilities
        discord: '#7b40ff',
        link: 'rgb(0, 71, 125)',
        highlight: 'rgb(255, 204, 0)',
        hackathoneGreen: 'rgb(9, 185, 76)',
        backgroundColor: '#000000',
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Default sans font to Roboto
      },
    },
  },
  plugins: [],
};
