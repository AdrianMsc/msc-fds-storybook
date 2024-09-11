module.exports = function ({ addComponents, theme }) {
  const icons = {
    ".icon-btn": {
      "@apply size-4 mr-2": {},
    },
    ".msc-toggle-icon": {
      "@apply w-4 h-4 mr-3 text-gray-400": {},
    },
  };
  addComponents(icons);
};
