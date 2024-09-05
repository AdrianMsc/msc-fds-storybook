import MscLink from "../components/ds/MscLink";

// Configuración de la historia para MscButton
export default {
  title: "Action/Link",
  component: MscLink,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "text", "drop"],
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
    label: "Link",
    variant: "default",
  },
};
