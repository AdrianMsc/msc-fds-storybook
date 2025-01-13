import MscTableModal from "../components/ds/MscTableModal";

export default {
  title: "Action/Table Modal",
  component: MscTableModal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    productTitle: { control: "text" },
    brandTitle: { control: "text" },
    total: { control: "text" },
  },
};

export const mscTableModal = {
  args: {
    productTitle: "Carbide 118-Degree Bright ",
    brandTitle: "By Chicago-Latrobe ",
    total: "0.00",
  },
};
