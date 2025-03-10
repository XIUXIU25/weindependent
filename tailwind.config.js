

/*
customize Tailwind setup, including adding your primary color using your CSS variable.
*/

/** @type {import('tailwindcss').Config} */

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          primary: ["Mulish", "sans-serif"],
          secondary: ["Montserrat", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  