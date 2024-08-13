module.exports = function ({ addComponents, theme }) {
  const filter = {
    ".msc-top-filter": {
      "@apply border border-monochromes-grey_light rounded bg-white h-8 w-full md:w-[216px] flex flex-row place-content-between py-1.5 px-3 items-center text-monochromes-grey":
        {},
      "&:hover": {
        borderColor: "#000000",
      },
    },
    ".msc-top-filter-active": {
      "@apply border border-monochromes-grey_light rounded bg-white h-8 w-full md:w-[216px] flex flex-row place-content-between py-1.5 px-3 items-center hover:border-black text-black":
        {},
      "&:hover": {
        borderColor: "#000000",
      },
    },
    ".msc-top-filter-badge": {
      "@apply text-white rounded-full bg-black size-4 text-xs items-center": {},
    },
    ".msc-top-filters-section": {
      "@apply flex flex-col gap-2 bg-[#F2F2F2] p-3 border border-primary-blue rounded":
        {},
    },
    ".msc-top-filters-title": {
      "@apply font-bold text-lg": {},
    },
    ".msc-top-filters-container": {
      "@apply flex flex-row gap-4 w-full flex-wrap": {},
    },
  };
  addComponents(filter);
};
