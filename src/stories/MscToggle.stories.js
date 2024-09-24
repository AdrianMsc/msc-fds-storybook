import MscToggle from "../components/ds/MscToggle";

export default {
  title: "Form/Toggle",
  component: MscToggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "Default",
        "Disabled",
        "With Text",
        "Address Type",
        "Units",
        "Tolerance",
        "Class",
      ],
    },
  },
};

export const mscToggle = {
  args: {
    variant: "Default",
  },
};
