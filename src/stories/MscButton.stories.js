import { fn } from "@storybook/test";
import { MscButton } from "../components/ds/MscButton";

// Configuración de la historia para MscButton
export default {
  title: "Fuel Design System/Action",
  component: MscButton,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    className: {
      control: "select",
      options: [
        "msc-btn msc-btn-blue-solid",
        "msc-btn msc-btn-blue-outline",
        "msc-btn msc-btn-blue-transparent",
      ],
    }, // Permite modificar la clase del botón desde los controles
    label: { control: "text" }, // Permite modificar el label del botón desde los controles
    // backgroundColor: { control: "color" },
    size: {
      control: "select",
      options: ["", "msc-btn-sm"],
    },
  },
  // args: { onClick: fn() },
};

// Definición de variaciones del botón
export const mscButton = {
  args: {
    label: "Blue Solid",
    className: "msc-btn msc-btn-blue-solid",
  },
};

// export const outline = {
//   args: {
//     label: "Blue Outline",
//     className: "msc-btn msc-btn-blue-outline",
//   },
// };

// export const transparent = {
//   args: {
//     label: "Transparent",
//     className: "msc-btn msc-btn-blue-transparent",
//   },
// };
