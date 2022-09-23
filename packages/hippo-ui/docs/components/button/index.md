---
 Button按钮: doc
---
## 查看效果
------
使用 `color`、`plain`、`rounded`、`icon`、`shadow` 来定义按钮的样式。
:::demo 

```vue
<template>
  <div style="margin-bottom:20px;">
    <HButton>Button</HButton>
    <HButton color="green">Green</HButton>
    <HButton color="gray">g-r-a-y</HButton>
    <HButton color="yellow">yellow</HButton>
    <HButton color="red">red</HButton>
  </div>
  <div style="margin-bottom:20px;">
    <HButton plain>Plain</HButton>
    <HButton color="green" plain>Green</HButton>
    <HButton color="gray" plain>g-a-r-y</HButton>
    <HButton color="yellow" plain>yellow</HButton>
    <HButton color="red" plain>red</HButton>
  </div>
  <div style="margin-bottom:20px;">
    <HButton color="green" rounded>Green</HButton>
    <HButton color="gray" rounded>g-r-a-y</HButton>
    <HButton color="yellow" rounded>yellow</HButton>
    <HButton color="red" rounded>r-e-d</HButton>
  </div>
  <div style="margin-bottom:20px;">
    <HButton rounded icon="search"></HButton>
    <HButton color="green" rounded icon="edit"></HButton>
    <HButton color="gray" rounded icon="check"></HButton>
    <HButton color="yellow" rounded icon="message"></HButton>
    <HButton color="red" rounded icon="delete"></HButton>
  </div>
    <div style="margin-bottom:20px;">
    <HButton shadow>white</HButton>
    <HButton color="green" shadow>Green</HButton>
    <HButton color="purple" shadow>purple</HButton>
    <HButton color="yellow" shadow>yellow</HButton>
    <HButton color="indigo">indigo</HButton>
  </div>
</template>
```

:::
## 禁用状态
你可以使用`disabled`属性来定义按钮是否被禁用
:::demo 
```vue
<template>
    <div style="margin-bottom:20px;">
    <HButton disabled>Button</HButton>
    <HButton color="green" disabled>Green</HButton>
    <HButton color="gray" disabled>g-r-a-y</HButton>
    <HButton color="yellow" disabled>yellow</HButton>
    <HButton color="red" disabled>red</HButton>
  </div>
  <div style="margin-bottom:20px;">
    <HButton plain disabled>Plain</HButton>
    <HButton color="green" plain disabled>Green</HButton>
    <HButton color="gray" plain disabled>g-a-r-y</HButton>
    <HButton color="yellow" plain disabled>yellow</HButton>
    <HButton color="red" plain disabled>red</HButton>
  </div>
</template>
```

:::

## 文字按钮
没有边框和背景色的按钮
:::demo 
```vue
<template>
  Basic text button
    <div style="margin-bottom:20px;">
    <HButton text>Button</HButton>
    <HButton color="green" text>Green</HButton>
    <HButton color="gray" text>g-r-a-y</HButton>
    <HButton color="yellow" text>yellow</HButton>
    <HButton color="red" text>red</HButton>
  </div>
  Disabled text button
  <div style="margin-bottom:20px;">
    <HButton plain text disabled>Plain</HButton>
    <HButton color="green" plain text disabled>Green</HButton>
    <HButton color="gray" plain text disabled>g-a-r-y</HButton>
    <HButton color="yellow" plain text disabled>yellow</HButton>
    <HButton color="red" plain text disabled>red</HButton>
  </div>
</template>
```

:::

## 图标按钮
使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

:::demo 
```vue
<template>
  <div style="margin-bottom:20px;">
    <HButton icon="search"></HButton>
    <HButton color="green" icon="edit">Edit</HButton>
    <HButton color="gray" icon="check"></HButton>
    <HButton color="yellow" icon="message">message</HButton>
    <HButton color="red" icon="delete"></HButton>
  </div>
</template>
```

:::

## 调整尺寸
提供了几个`size`属性，分别为`small`、`middle(默认)`、`large`、`superBig`、`superSpecialBig`

:::demo 
```vue
<template>
  <div style="margin-bottom:20px;">
    <HButton size="small" plain>小按钮</HButton>
    <HButton size="middle" plain>middle</HButton>
    <HButton size="large" plain>lang</HButton>
    <HButton size="superBig" plain>superBig</HButton>
    <HButton size="superSpecialBig" plain>superSpecialBig</HButton>

  </div>
  <div style="margin-bottom:20px;">
    <HButton size="small" rounded plain>小按钮</HButton>
    <HButton size="middle" rounded plain>middle</HButton>
    <HButton size="large" rounded plain>lang</HButton>
    <HButton size="superBig" rounded plain>superBig</HButton>
    <HButton size="superSpecialBig" rounded plain>superSpecialBig</HButton></div>
  <div style="margin-bottom:20px;">
    <HButton color="yellow" size="small" icon="message" rounded></HButton>
    <HButton icon="search" size="middle" rounded></HButton>
    <HButton color="green" size="superBig" icon="edit" rounded></HButton>
    <HButton color="gray" size="superSpecialBig" icon="check" rounded></HButton>
  </div>
</template>
```

:::


## API
---
<style>
  td, th {
   border: none!important;
}
</style>
|  属性名  | 说明 |  类型   |                     可选值                      | 默认值 |
| :------: | :--: | :-----: | :---------------------------------------------: | :----: |
|   size   | 尺寸 | string  |      `small` `large` `superBig` `superSpecialBig`       | middle |
|  color   | 颜色 | string  | `black` `gray` `yellow` `green` `blue` `indigo` `purple` `pink` |   -    |
|  plain   | 朴素 | boolean |                        -                        | false  |
| rounded  | 圆角 | boolean |                        -                        | false  |
|   icon   | 图标 | string  |                        -                        |   -    |
| disabled | 禁用 | boolean |                        -                        | false  |

