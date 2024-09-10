import MscTabs from "../components/ds/MscTabs";

export default {
  title: "Action/Tabs",
  component: MscTabs,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    labels: { control: "array" },
  },
};

export const mscTabs = {
  args: {
    labels: [
      "General Purpose & Heavy Duty",
      "Specialized & High Performance",
      "Maintenance",
    ],
  },
};
