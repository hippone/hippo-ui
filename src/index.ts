import { createApp } from "vue";
import SmartyUI from "./entry";

createApp({
  template:`
  <div>
    <div>
      <SButton color="blue">蓝色按钮</SButton>
      <SButton color="green">绿色按钮</SButton>
      <SButton color="gray">灰色按钮</SButton>
      <SButton color="yellow">黄色按钮</SButton>
    </div>
    <div>
      <SButton color="blue" size="small" plain>朴素按钮</SButton>
      <SButton color="blue" size="large" plain>朴素按钮</SButton>
      <SButton color="red" size="superBig" plain>朴素按钮</SButton>
    </div>
    <div>
      <SButton color="blue" size="small" rounded plain>圆角按钮</SButton>
      <SButton color="green" size="large" rounded plain>长圆角按钮</SButton>
      <SButton color="gray"  rounded plain>长圆角按钮</SButton>
      <SButton color="yellow" size="middle" rounded plain>朴素按钮</SButton>
    </div>
    <div>
      <SButton color="blue" size="small" icon="search" plain></SButton>
      <SButton color="green" size="large" icon="add" plain></SButton>
      <SButton color="gray" size="superBig" icon="delete" plain></SButton>
      <SButton color="yellow" size="middle" icon="check" plain></SButton>
    </div>
  </div>`
}).use(SmartyUI).mount('#app');