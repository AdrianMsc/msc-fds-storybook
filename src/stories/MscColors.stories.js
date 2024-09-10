import MscColors from "../components/ds/MscColors";

export default {
  title: "Foundations/Colors",
  component: MscColors,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    palette: {
      control: "select",
      options: [
        "monochromes",
        "white",
        "off_white",
        "primary",
        "brand_blue",
        "success",
        "warning",
        "error",
      ],
    },
  },
};

export const mscColors = {
  args: {
    palette: "primary",
  },
};
