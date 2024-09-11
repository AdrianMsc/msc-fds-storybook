import MscInput from "../components/ds/MscInput";

export default {
  title: "Form/Input",
  component: MscInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    errorMessage: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export const mscInput = {
  args: {
    label: "Default",
    errorMessage: "",
    required: true,
    disabled: false,
  },
};
