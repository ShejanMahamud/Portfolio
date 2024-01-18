/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['*'],
    theme: {
      extend: {
        fontFamily: {
            code: "Fira Code",
          },
          backgroundImage: {
            blur: "url('./images/Green.svg')",
          },
      },
    },
    plugins: [],
  }