import MscRadio from "../components/ds/MscRadio";

export default {
  title: "Form/Radio",
  component: MscRadio,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "set"],
    },
  },
};

export const mscRadio = {
  args: {
    variant: "default",
  },
};
