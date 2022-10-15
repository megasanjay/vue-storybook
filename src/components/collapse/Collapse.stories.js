import { NCollapse, NCollapseItem } from "naive-ui";

export default {
  title: "Components/Collapse",
  component: NCollapse,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "huge"],
    },
    hoverable: { control: { type: "boolean" } },
  },
};

const BasicTemplate = (args) => ({
  components: { NCollapse, NCollapseItem },
  setup() {
    return { args };
  },
  template: `<n-collapse>
  <n-collapse-item title="First" name="1">
    <div>good</div>
  </n-collapse-item>
  <n-collapse-item title="Second" name="2">
    <div>nice</div>
  </n-collapse-item>
  <n-collapse-item title="Third" name="3">
    <div>very good</div>
  </n-collapse-item>
</n-collapse>`,
});

export const Basic = BasicTemplate.bind({});
Basic.args = {};

const AccordionTemplate = (args) => ({
  components: { NCollapse, NCollapseItem },
  setup() {
    return { args };
  },
  template: `<n-collapse accordion default-expanded-names="1">
  <n-collapse-item title="First" name="1">
    <div>good</div>
  </n-collapse-item>
  <n-collapse-item title="Second" name="2">
    <div>nice</div>
  </n-collapse-item>
  <n-collapse-item title="Third" name="3">
    <div>very good</div>
  </n-collapse-item>
</n-collapse>`,
});

export const Accordion = AccordionTemplate.bind({});
Accordion.args = {};
