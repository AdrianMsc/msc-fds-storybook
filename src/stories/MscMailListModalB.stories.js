import MscMailListModalB from "../components/ds/MscMailListModalB";

export default {
  title: "Action/MailListModalB",
  component: MscMailListModalB,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    discount: {
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    price: { control: { type: "number", min: 0, max: 9999, step: 1 } },
    disclaimer: { control: "text" },
    placeholder: { control: "text" },
    buttonAccept: { control: "text" },
    buttonCancel: { control: "text" },
  },
};

export const mscModalMailListB = {
  args: {
    discount: 20,
    price: 149,
    disclaimer: "Exclusions Apply",
    placeholder: "Email Address",
    buttonAccept: "Subscribe",
    buttonCancel: "No thanks",
  },
};
