import MscTypography from "../components/ds/MscTypography";

export default {
  title: "Foundations/Typography",
  component: MscTypography,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: { control: "text" },
  },
};

export const mscTypography = {
  args: {
    text: "Heading",
  },
};
