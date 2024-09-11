import MscModal from "../components/ds/MscModal";

export default {
  title: "Action/Modal",
  component: MscModal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    body: { control: "text" },
    buttonOne: { control: "text" },
    buttonTwo: { control: "text" },
  },
};

export const mscModal = {
  args: {
    title: "Modal Tilte",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e",
    buttonOne: "Accept",
    buttonTwo: "Cancel",
  },
};
