/** @type {import('tailwindcss').Config} */
const colors = require("./utilities/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./index.html", "./utilities/index.js"],
  theme: {
    extend: {
      colors,
      keyframes: {
        dotFlashing1: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        dotFlashing2: {
          "0%": { opacity: "0.6" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dotFlashing3: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        dotFlashing1: "dotFlashing1 2s infinite linear alternate",
        dotFlashing2: "dotFlashing2 2s infinite linear alternate 0.4s",
        dotFlashing3: "dotFlashing3 2s infinite linear alternate 0.6s",
      },
    },
  },
  plugins: [
    require("./msc-components/msc-general"),
    require("./msc-components/msc-buttons"),
    require("./msc-components/msc-checkbox"),
    require("./msc-components/msc-dropdown"),
    require("./msc-components/msc-inputs"),
    require("./msc-components/msc-modals"),
    require("./msc-components/msc-radio"),
    require("./msc-components/msc-toggle"),
    require("./msc-components/msc-icons"),
    require("./msc-components/msc-dividers"),
    require("./msc-components/msc-spinner"),
    require("./msc-components/msc-link"),
    require("./msc-components/msc-typography"),
    require("./msc-components/msc-pager"),
    require("./msc-components/msc-pagination"),
    require("./msc-components/msc-filter"),
    require("./msc-components/msc-dialog"),
    require("./msc-components/msc-grey-button"),
    require("./msc-components/msc-tabs"),
    require("./msc-components/msc-cart-action-bar"),
    require("./msc-components/msc-breadcrumb"),
    require("./msc-components/msc-alert"),
  ],
};
