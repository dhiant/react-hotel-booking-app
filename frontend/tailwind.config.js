module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // adding custom breakpoints of 400px
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
