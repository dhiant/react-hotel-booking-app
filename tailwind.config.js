module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--c-primary)",
        secondary: "var(--c-secondary)",
        primaryLight: "var(--c-primary-light)",
        text: "var(--c-text)",
        textLight: "var(--c-text-light)",
        highlight: "var(--c-highlight)",
      },
    },
  },
  plugins: [],
};
