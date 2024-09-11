import MscCheckbox from "../components/ds/MscCheckbox";

export default {
  title: "Form/Checkbox",
  component: MscCheckbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
  },
};

export const mscCheckbox = {
  args: {
    label: "Checkbox Label",
  },
};
