import { NCarousel } from "naive-ui";

export default {
  title: "Components/Carousel",
  component: NCarousel,
  argTypes: {
    autoPlay: { control: { type: "boolean" } },
    "show-arrow": { control: { type: "boolean" } },
    vertical: { control: { type: "boolean" } },
  },
};

const Template = (args) => ({
  components: { NCarousel },
  setup() {
    return { args };
  },
  template:
    '<n-carousel>  <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">   <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">   <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">  <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"></n-carousel>',
});

export const Component = Template.bind({});
Component.args = {};
