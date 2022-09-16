# Button按钮 

### 查看效果
------
:::demo 使用 `size`、`color`、`plain`、`rounded`、`icon` 来定义按钮的样式。

```vue
<template>
  <div style="margin-bottom:20px;">
    <HButton color="blue">主要按钮</HButton>
    <HButton color="green">绿色按钮</HButton>
    <HButton color="gray">灰色按钮</HButton>
    <HButton color="yellow">黄色按钮</HButton>
    <HButton color="red">红色按钮</HButton>
  </div>
  <div style="margin-bottom:20px;"
  >
    <HButton color="blue" plain>朴素按钮</HButton>
    <HButton color="green" plain>绿色按钮</HButton>
    <HButton color="gray" plain>灰色按钮</HButton>
    <HButton color="yellow" plain>黄色按钮</HButton>
    <HButton color="red" plain>红色按钮</HButton>
  </div>
  <div style="margin-bottom:20px;">
    <HButton size="small" plain>小按钮</HButton>
    <HButton size="middle" plain>中按钮</HButton>
    <HButton size="large" plain>大按钮</HButton>
  </div>
  <div style="margin-bottom:20px;">
    <HButton color="blue" rounded plain icon="search">搜索按钮</HButton>
    <HButton color="green" rounded plain icon="edit">编辑按钮</HButton>
    <HButton color="gray" rounded plain icon="check">成功按钮</HButton>
    <HButton color="yellow" rounded plain icon="message">提示按钮</HButton>
    <HButton color="red" rounded plain icon="delete">删除按钮</HButton>
  </div>
  <div style="margin-bottom:20px;">
    <HButton color="blue" rounded plain icon="search"></HButton>
    <HButton color="green" rounded plain icon="edit"></HButton>
    <HButton color="gray" rounded plain icon="check"></HButton>
    <HButton color="yellow" rounded plain icon="message"></HButton>
    <HButton color="red" rounded plain icon="delete"></HButton>
  </div>
</template>
```

:::