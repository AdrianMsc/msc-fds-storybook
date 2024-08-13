module.exports = function ({ addComponents, theme }) {
    const alert = {
      ".msc-alert": {
        "@apply border rounded-md p-4": {},
      },
      ".msc-alert-info": {
        "@apply border-primary-blue": {},
      },
      ".msc-alert-success": {
        "@apply border-success-green_dark": {},
      },
      ".msc-alert-warning": {
        "@apply border-warning-orange": {},
      },
      ".msc-alert-error": {
        "@apply border-error-red [&_.msc-alert-title]:text-error-red": {},
      },
      ".msc-alert-icon": {
        "@apply block relative top-1": {},
      },
      ".msc-alert-info-icon": {
        "@apply text-primary-blue": {},
      },
      ".msc-alert-success-icon": {
        "@apply text-success-green_dark": {},
      },
      ".msc-alert-warning-icon": {
        "@apply text-warning-orange": {},
      },
      ".msc-alert-error-icon": {
        "@apply text-error-red": {},
      },
      ".msc-alert-title": {
        "@apply font-bold text-sm": {},
      },
      ".msc-alert-description": {
        "@apply font-normal text-sm": {},
      },
      ".msc-alert-list-container": {
        "@apply text-sm [&_a]:text-primary-blue_dark": {},
      },
      ".msc-alert-list-toggle": {
        "@apply font-bold text-primary-blue_dark outline-none": {},
      },
      ".msc-alert-list-toggle-show": {
        "@apply group-[.accordion-open]:hidden inline-block": {},
      },
      ".msc-alert-list-toggle-hide": {
        "@apply group-[.accordion-open]:inline-block hidden": {},
      },
      ".msc-alert-list-toggle-icon": {
        "@apply ml-1 group-[.accordion-open]:rotate-180": {},
      },
      ".msc-alert-list": {
        "@apply list-disc list-inside border-t mt-1 pt-1 group-[.accordion-open]:block hidden": {},
      },
      ".msc-alert-list-item": {
        "@apply font-bold": {},
      },
      ".msc-alert-main-container": {
        "@apply md:flex justify-between gap-3": {},
      },
      ".msc-alert-content": {
        "@apply flex justify-start gap-2 [&_a]:text-primary-blue_dark": {},
      },
      ".msc-alert-cta-container": {
        "@apply flex justify-between md:justify-end mt-4 md:mt-0 pb-4 md:gap-4 [&_button]:whitespace-nowrap": {},
      },
    };
    addComponents(alert);
  };
  