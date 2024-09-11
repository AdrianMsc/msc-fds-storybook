import MscDropdown from "../components/ds/MscDropdown";

export default {
  title: "Action/Dropdown",
  component: MscDropdown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "disabled",
        "with label",
        "with label on top",
        "numeric",
        "double",
        "error",
      ],
    },
    placeholder: { control: "text" },
  },
};

export const mscDropdown = {
  args: {
    variant: "default",
    placeholder: "Select a Buyer",
  },
};
