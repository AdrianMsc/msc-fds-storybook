import MscSpacing from "../components/ds/MscSpacing";

export default {
  title: "Foundations/Spacing",
  component: MscSpacing,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: [2, 4, 8, 16, 24] },
  },
};

export const mscTypography = {
  args: {
    size: 4,
  },
};
