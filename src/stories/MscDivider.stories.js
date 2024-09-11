import MscDivider from "../components/ds/MscDivider";

export default {
  title: "Form/Divider",
  component: MscDivider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "horizontal_gray",
        "horizontal_blue",
        "vertical_gray",
        "vertical_blue",
      ],
    },
  },
};

export const mscDivider = {
  args: {
    variant: "horizontal_gray",
  },
};
