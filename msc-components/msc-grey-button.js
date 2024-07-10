module.exports = function ({ addComponents, theme }) {
  const greyButton = {
    ".msc-grey-button": {
      "@apply flex gap-[6px] items-center py-[13px] px-[10px] text-sm font-normal text-monochromes-grey_light hover:text-monochromes-grey_dark":
        {},
    },
  };
  addComponents(greyButton);
};
