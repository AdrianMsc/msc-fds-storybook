module.exports = function ({ addComponents, theme }) {
  const general = {
    ".main-container": {
      "@apply h-screen w-screen bg-[#f2f2f2] p-5 overflow-auto": {},
    },
    ".msc-layout-container": {
      "@apply col-span-12 md:col-span-12 2xl:col-span-8 2xl:col-start-3": {},
    },
    ".msc-component-container-col": {
      "@apply flex flex-col gap-2 place-content-evenly w-full h-fit bg-white rounded py-4 px-4 my-2":
        {},
    },
    ".msc-component-container-row": {
      "@apply flex flex-row flex-wrap items-center gap-2 place-content-evenly w-full h-fit bg-white rounded py-4 px-4 mt-2":
        {},
    },
    ".msc-grid-layout": {
      "@apply grid grid-cols-12": {},
    },
    ".sidebar-category-button": {
      "@apply flex items-center w-full px-2 text-sm font-bold text-gray-900 rounded-lg hover:bg-blue-50 py-1":
        {},
    },
    ".sidebar-component-button": {
      "@apply flex items-center w-full px-2 text-gray-900 rounded-lg pl-5 hover:bg-blue-50":
        {},
      "&:active": {
        "@apply bg-blue-100": {},
      },
    },
    ".sidebar-component-button-active": {
      "@apply flex items-center w-full px-2 text-gray-900 rounded-lg pl-5 bg-blue-100":
        {},
    },
    ".category-tag": {
      "@apply text-sm text-primary-blue font-bold": {},
    },
  };
  addComponents(general);
};
