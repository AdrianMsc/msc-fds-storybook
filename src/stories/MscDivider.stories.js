import MscDividers from "../components/ds/MscDividers";

export default {
  title: "Form/Dividers",
  component: MscDividers,
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

export const mscDividers = {
  args: {
    variant: "horizontal_gray",
  },
};
