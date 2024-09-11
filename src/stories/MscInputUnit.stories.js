import MscInputUnit from "../components/ds/MscInputUnit";

export default {
  title: "Form/Input",
  component: MscInputUnit,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    errorMessage: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export const mscInputUnit = {
  args: {
    label: "Length (ft)",
    errorMessage: "",
    disabled: false,
  },
};
