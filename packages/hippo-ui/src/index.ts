import { createApp } from "vue/dist/vue.esm-bundler.js";
import HippoUI from "./entry";

createApp({
  template: `
  <div>
    <div>
      <HButton >No color</HButton>
      <HButton color="green" shadow>绿色按钮</HButton>
      <HButton color="gray" >灰色按钮</HButton>
      <HButton color="yellow" >黄色按钮</HButton>
      <HButton color="yellow" size="superSpecialBig">superSpecialBig</HButton>
      
    </div>
    <div>
      <HButton plain>No color</HButton>
      <HButton color="blue" size="small" plain >小朴素按钮</HButton>
      <HButton color="blue" size="large" plain>长朴素按钮</HButton>
      <HButton color="red" size="superBig" plain disabled>禁用红朴素按钮</HButton>
    </div>
    <div>
      <HButton color="blue" size="small" rounded disabled>圆角按钮</HButton>
      <HButton color="green" size="large" rounded disabled>长圆角按钮</HButton>
      <HButton color="gray"  rounded >长圆角按钮</HButton>
      <HButton color="yellow" size="middle" rounded plain disabled>禁用朴素按钮</HButton>
    </div>
    <div>
      <HButton color="blue" size="small" icon="search" ></HButton>
      <HButton color="gray" size="superBig" icon="delete" rounded />
      <HButton color="yellow" icon="check" rounded />
      <HButton color="green" icon="add" rounded />
    </div>
    <div>
      <HButton text disabled>text</HButton>
      <HButton text disabled color="purple">text</HButton>
    </div>
  </div>`,
})
  .use(HippoUI)
  .mount("#app");
