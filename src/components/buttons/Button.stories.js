import { NButton } from "naive-ui";

export default {
  title: "Example/Button",
  component: NButton,
  argTypes: {},
};

const Template = (args) => ({
  components: { NButton },
  setup() {
    return { args };
  },
  template: '<n-button v-bind="args" >Button</>',
});

export const Type = Template.bind({});
Type.args = { type: "primary" };

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
