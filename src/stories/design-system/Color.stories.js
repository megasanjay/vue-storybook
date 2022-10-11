import BackgroundColor from "./BackgroundColor.vue";

export default {
  title: "Design System/Color",
  component: BackgroundColor,
  argTypes: {
    colorClass: { table: { disable: true } },
  },
};

const Template = (args) => ({
  components: { BackgroundColor },
  setup() {
    return { args };
  },
  template: '<BackgroundColor v-bind="args" />',
});

export const BackgroundColors = Template.bind({});
