import { MscButtonIcon } from "../components/ds/MscButtonIcon";

export default {
  title: "Action/Button",
  component: MscButtonIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: {
      control: "select",
      options: [
        "fa-solid fa-thumbs-up",
        "fa-solid fa-magnifying-glass",
        "fa-solid fa-comment",
      ],
    },

    size: {
      control: "select",
      options: ["default", "small", "large"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export const mscButtonIcon = {
  args: {
    icon: "fa-solid fa-thumbs-up",
    size: "default",
    disabled: false,
  },
};
