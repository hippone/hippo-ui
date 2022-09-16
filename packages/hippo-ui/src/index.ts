import { createApp } from "vue/dist/vue.esm-bundler.js";
import HippoUI from "./entry";

createApp({
  template: `
  <div>
    <div>
      <HButton color="blue">蓝色按钮</HButton>
      <HButton color="green">绿色按钮</HButton>
      <HButton color="gray">灰色按钮</HButton>
      <HButton color="yellow">黄色按钮</HButton>
    </div>
    <div>
      <HButton color="blue" size="small" plain>朴素按钮</HButton>
      <HButton color="blue" size="large" plain>朴素按钮</HButton>
      <HButton color="red" size="superBig" plain>朴素按钮</HButton>
    </div>
    <div>
      <HButton color="blue" size="small" rounded plain>圆角按钮</HButton>
      <HButton color="green" size="large" rounded plain>长圆角按钮</HButton>
      <HButton color="gray"  rounded plain>长圆角按钮</HButton>
      <HButton color="yellow" size="middle" rounded plain>朴素按钮</HButton>
    </div>
    <div>
      <HButton color="blue" size="small" icon="search" plain></HButton>
      <HButton color="green" size="large" icon="add" plain></HButton>
      <HButton color="gray" size="superBig" icon="delete" plain></HButton>
      <HButton color="yellow" size="middle" icon="check" plain></HButton>
    </div>
  </div>`,
})
  .use(HippoUI)
  .mount("#app");
