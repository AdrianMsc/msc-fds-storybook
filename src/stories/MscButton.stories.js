import { MscButton } from "../components/ds/MscButton";

export default {
  title: "Action/Button",
  component: MscButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "transparent"],
    },
    label: { control: "text" },
    size: {
      control: "select",
      options: ["default", "small"],
    },
  },
};

export const mscButton = {
  args: {
    label: "Blue Solid",
    variant: "solid",
  },
};
