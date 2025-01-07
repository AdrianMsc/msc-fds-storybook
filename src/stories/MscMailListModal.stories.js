import MscMailListModal from "../components/ds/MscMailListModal";

export default {
  title: "Action/Mail List Modal C",
  component: MscMailListModal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    description: { control: "text" },
  },
};

export const mscMailListModal = {
  args: {
    description: "Save up to 20% off on orders over $149",
  },
};
