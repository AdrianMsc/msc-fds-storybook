import MscAlert from "../components/ds/MscAlert";

export default {
  title: "Indicator/Alerts",
  component: MscAlert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    message: { control: "text" },
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
    actionOne: { control: "text" },
    actionTwo: { control: "text" },
  },
};

export const mscAlert = {
  args: {
    message: "This a message",
    variant: "info",
    actionOne: "Action 1",
    actionTwo: "Action 2",
  },
};
