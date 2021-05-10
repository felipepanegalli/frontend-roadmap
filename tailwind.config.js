module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "survey": "url('../img/survey-background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
