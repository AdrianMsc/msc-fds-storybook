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
    variant: {
      control: "select",
      options: ["solid", "outline", "transparent"],
    }, // Permite modificar la clase del botón desde los controles
    label: { control: "text" }, // Permite modificar el label del botón desde los controles
    // backgroundColor: { control: "color" },
    size: {
      control: "select",
      options: ["default", "small"],
    },
  },
  // args: { onClick: fn() },
};

// Definición de variaciones del botón
export const mscButton = {
  args: {
    label: "Blue Solid",
    variant: "solid",
  },
};
