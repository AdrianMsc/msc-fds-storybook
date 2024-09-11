/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    // "@chromatic-com/storybook",
    // "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // Añadir la configuración para incluir el archivo preview-head.html
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" href="https://adrianmsc.github.io/msc-tailwind-theme/assets/font-awesome/css/all.css" />
  `,
};

export default config;
