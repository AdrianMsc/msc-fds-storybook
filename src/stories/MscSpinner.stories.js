import MscSpinner from "../components/ds/MscSpinner";

export default {
  title: "Indicator/Spinner",
  component: MscSpinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    loadText: { control: "text" },
    variant: { control: "select", options: ["light", "dark"] },
  },
};

export const mscSpinner = {
  args: {
    loadText: "Loading Spinner",
    variant: "light",
  },
};
