# Button按钮 

### 查看效果
------
:::demo 使用 `size`、`color`、`plain`、`rounded`、`icon` 来定义按钮的样式。

```vue
<template>
  <div style="margin-bottom:20px;">
    <SButton color="blue">主要按钮</SButton>
    <SButton color="green">绿色按钮</SButton>
    <SButton color="gray">灰色按钮</SButton>
    <SButton color="yellow">黄色按钮</SButton>
    <SButton color="red">红色按钮</SButton>
  </div>
  <div style="margin-bottom:20px;"
  >
    <SButton color="blue" plain>朴素按钮</SButton>
    <SButton color="green" plain>绿色按钮</SButton>
    <SButton color="gray" plain>灰色按钮</SButton>
    <SButton color="yellow" plain>黄色按钮</SButton>
    <SButton color="red" plain>红色按钮</SButton>
  </div>
  <div style="margin-bottom:20px;">
    <SButton size="small" plain>小按钮</SButton>
    <SButton size="middle" plain>中按钮</SButton>
    <SButton size="large" plain>大按钮</SButton>
  </div>
  <div style="margin-bottom:20px;">
    <SButton color="blue" rounded plain icon="search">搜索按钮</SButton>
    <SButton color="green" rounded plain icon="edit">编辑按钮</SButton>
    <SButton color="gray" rounded plain icon="check">成功按钮</SButton>
    <SButton color="yellow" rounded plain icon="message">提示按钮</SButton>
    <SButton color="red" rounded plain icon="delete">删除按钮</SButton>
  </div>
  <div style="margin-bottom:20px;">
    <SButton color="blue" rounded plain icon="search"></SButton>
    <SButton color="green" rounded plain icon="edit"></SButton>
    <SButton color="gray" rounded plain icon="check"></SButton>
    <SButton color="yellow" rounded plain icon="message"></SButton>
    <SButton color="red" rounded plain icon="delete"></SButton>
  </div>
</template>
```

:::