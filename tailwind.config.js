/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
        colors: {
          primary: "#2e37b3",
          "primary-content": "#e7e8f9",
          "primary-dark": "#242b8a",
          "primary-light": "#454ecf",

          secondary: "#672eb3",
          "secondary-content": "#efe7f9",
          "secondary-dark": "#50248a",
          "secondary-light": "#8045cf",

          background: "#ededf3",
          foreground: "#fafbfc",
          border: "#d9dae5",

          copy: "#1f202e",
          "copy-light": "#52547a",
          "copy-lighter": "#7578a3",

          success: "#2eb32e",
          warning: "#b3b32e",
          error: "#b32e2e",

          "success-content": "#e7f9e7",
          "warning-content": "#000000",
          "error-content": "#f9e7e7"
      },
      backgroundImage: {
        lightBg:
          "#FFFFFF",
        darkBg: "linear-gradient(to top, rgb(36, 36, 36), rgb(36, 36, 45))",
      },
      fontFamily: {
        "roboto": ["roboto", "sans-serif"],
        "mono": ["IBM Plex Mono", "ui-monospace"]
      }
    },
  },
  plugins: [],
}

