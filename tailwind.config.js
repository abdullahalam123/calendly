/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1278px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "638px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        // header colors
        "header-color": "#1A1A1A",
        "light-header-color": "#1A1A1A9C",

        // calendar colors
        "disabled-color": "#9e9e9e",
        "date-selected": "#0069ff",
        "date-color": "#0060d4",
        "date-background": "#ebf4ff",
        "date-hover": "#d9e9ff",
        "ribbon-static": "#505960",
        "ribbon-hover": "#40474c",

        // arrow color
        "arrow-color": "#737373",

        // button color
        "button-hover": "#e5e5e5",
      },
      
    },
  },
  plugins: [],
};
