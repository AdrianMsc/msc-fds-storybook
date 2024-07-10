module.exports = function ({ addComponents, theme }) {
  const general = {
    ".msc-container": {
      "@apply h-screen bg-[#f2f2f2]": {},
    },
  };
  addComponents(general);
};
