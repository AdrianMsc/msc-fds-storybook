import MscShadows from "../components/ds/MscShadows";

export default {
  title: "Foundations/Shadows",
  component: MscShadows,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: [
        "small",
        "default",
        "medium",
        "large",
        "xLarge",
        "xxLarge",
        "inner",
      ],
    },
  },
};

export const mscShadows = {
  args: {
    size: "small",
  },
};
