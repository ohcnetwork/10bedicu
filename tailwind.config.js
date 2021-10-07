module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Quicksand", "ui-sans-serif", "system-ui"],

      serif: ["Quicksand", "ui-serif", "serif"],

      mono: ["Quicksand", "ui-monospace", "monospace"],

      display: ["Quicksand", "ui-display", "sans-serif"],

      body: ["Quicksand", "ui-body", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#76F3FF",
          100: "#E7F8FA",
          200: "#2AECFF",
          300: "#00E0F6",
          400: "#00B1C3",
          500: "#008390",
          600: "#00555D",
          700: "#00262A",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
