import MscDialog from "../components/ds/MscDialog";

export default {
  title: "Action/Dialog",
  component: MscDialog,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    buttonOne: { control: "text" },
    buttonTwo: { control: "text" },
    loading: { control: "boolean" },
  },
};

export const mscDialog = {
  args: {
    title: "Are you sure?",
    text: " You are setting your status as Out of Office. Your organization will see this status until you turn it off.",
    buttonOne: "cancel",
    buttonTwo: "continue",
    loading: false,
  },
};
