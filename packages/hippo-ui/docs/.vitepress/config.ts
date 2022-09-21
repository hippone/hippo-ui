declare var require: any
const sidebar = {
    '/': [
        { text: '介绍', link: '/' },
        {
            text: '通用',
            children: [
                { text: 'Button 按钮', link: '/components/button/' },
            ]
        },
    ]
}
const config = {
    title: "🔨  Hippo-UI",
    description: "组件库搭建学习项目",
    themeConfig: {
        sidebar,
    },
    markdown: {
      config: (md) => {
        // 添加DemoBlock插槽
        const { demoBlockPlugin } = require('vitepress-theme-demoblock')
        md.use(demoBlockPlugin)
    }
  }
}
export default config
