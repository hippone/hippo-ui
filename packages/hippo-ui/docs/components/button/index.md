# Button按钮 

### 查看效果
------
:::demo 使用 `size`、`color`、`plain`、`rounded`、`icon` 来定义按钮的样式。

```vue
<template>
  <div style="margin-bottom:20px;">
    <HButton>Button</HButton>
    <HButton color="green">Green Button</HButton>
    <HButton color="gray">灰色按钮</HButton>
    <HButton color="yellow">黄色按钮</HButton>
    <HButton color="red">红色按钮</HButton>
  </div>
  <div style="margin-bottom:20px;"
  >
    <HButton plain>朴素按钮</HButton>
    <HButton color="green" plain>Green</HButton>
    <HButton color="gray" plain>灰色按钮</HButton>
    <HButton color="yellow" plain>黄色按钮</HButton>
    <HButton color="red" plain>红色按钮</HButton>
  </div>
  <div style="margin-bottom:20px;">
    <HButton size="small" plain>小按钮</HButton>
    <HButton size="middle" plain>middle</HButton>
    <HButton size="large" plain>lang</HButton>
  </div>
  <div style="margin-bottom:20px;">
    <HButton color="purple" rounded plain icon="search">搜索圆角</HButton>
    <HButton color="green" rounded plain icon="edit">编辑按钮</HButton>
    <HButton color="yellow" rounded plain icon="message">提示按钮</HButton>
    <HButton color="red" rounded plain icon="delete">删除按钮</HButton>
  </div>
  <div style="margin-bottom:20px;">
    <HButton rounded icon="search"></HButton>
    <HButton color="green" rounded icon="edit"></HButton>
    <HButton color="gray" rounded icon="check"></HButton>
    <HButton color="yellow" rounded icon="message"></HButton>
    <HButton color="red" rounded icon="delete"></HButton>
  </div>
  <div>
    <HButton color="purple" disabled>Disabled</HButton>
  </div>
</template>
```

:::

### API
---
- size
  - default: middle
  - options: small、large、superBig、superSpecialBig
- color
  - default: white
  - options: white,black,gray,red,yellow,green,blue,indigo,purple,pink,
- plain
  - default: false
  - options: Boolean
- rounded
  - default: false
  - options: Boolean
- icon
- disabled
  - default: false
  - options: Boolean
