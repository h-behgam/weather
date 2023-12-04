/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'arial': ['arial'],
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        background: "url(/src/Assets/Images/background.jpg)",
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
