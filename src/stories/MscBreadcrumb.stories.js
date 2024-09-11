import MscBreadcrumb from "../components/ds/MscBreadcrumb";

export default {
  title: "Navigation/Breadcrumb",
  component: MscBreadcrumb,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    steps: { control: "number" },
  },
};

export const mscBreadcrumb = {
  args: {
    steps: 7,
  },
};
