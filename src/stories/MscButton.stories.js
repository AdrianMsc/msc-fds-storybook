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
    loading: { control: "boolean" },
    icon: {
      control: "select",
      options: [
        "none",
        "fa-solid fa-thumbs-up",
        "fa-solid fa-magnifying-glass",
        "fa-solid fa-comment",
      ],
    },
  },
};

export const mscButton = {
  args: {
    label: "Blue Solid",
    variant: "solid",
    loading: false,
  },
};
