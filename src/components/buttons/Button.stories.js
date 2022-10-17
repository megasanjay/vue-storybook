import { NButton } from "naive-ui";

export default {
  title: "Components/Button",
  component: NButton,
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["tiny", "small", "medium", "large"],
    },
    disabled: { control: { type: "boolean" } },
    loading: { control: { type: "boolean" } },
    circle: { control: { type: "boolean" } },
    round: { control: { type: "boolean" } },
  },
};

const TypeTemplate = (args) => ({
  components: { NButton },
  setup() {
    return { args };
  },
  template: '<n-button v-bind="args">{{args.type}}</n-button>',
});

export const Type = TypeTemplate.bind({});
Type.args = { type: "default" };

const SecondaryTemplate = (args) => ({
  components: { NButton },
  setup() {
    return { args };
  },
  template: '<n-button v-bind="args" secondary>{{args.type}}</n-button>',
});

export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {
  type: "default",
};

const TertiaryTemplate = (args) => ({
  components: { NButton },
  setup() {
    return { args };
  },
  template: '<n-button v-bind="args" tertiary>{{args.type}}</n-button>',
});

export const Tertiary = TertiaryTemplate.bind({});
Tertiary.args = {
  type: "default",
};

const GhostTemplate = (args) => ({
  components: { NButton },
  setup() {
    return { args };
  },
  template: '<n-button v-bind="args" ghost>{{args.type}}</n-button>',
});

export const Ghost = GhostTemplate.bind({});
Ghost.args = {
  type: "default",
};

const DashedTemplate = (args) => ({
  components: { NButton },
  setup() {
    return { args };
  },
  template: '<n-button v-bind="args" dashed>{{args.type}}</n-button>',
});

export const Dashed = DashedTemplate.bind({});
Dashed.args = {
  type: "default",
};

const SizeTemplate = (args) => ({
  components: { NButton },
  setup() {
    return { args };
  },
  template: '<n-button v-bind="args">{{args.size}}</n-button>',
});

export const Size = SizeTemplate.bind({});
Size.args = {
  size: "medium",
  type: "warning",
};
