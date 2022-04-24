module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--c-primary)",
        secondary: "var(--c-secondary)",
        primaryLight: "var(--c-primary-light)",
        primaryDark: "var(--c-primary-dark)",
        text: "var(--c-text)",
        textLight: "var(--c-text-light)",
        highlight: "var(--c-highlight)",
        border: "var(--c-border)",
      },
    },
  },
  plugins: [],
};
