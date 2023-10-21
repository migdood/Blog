/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      customClasses: {
        "big-button":
          "bg-sky-700 rounded-lg m-5 px-4 py-2 text-white hover:bg-sky-950 transition-all hover:scale-110 sm:px-8 sm:py-3",
      },
    },
  },
  plugins: [],
};
