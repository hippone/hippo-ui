declare var require: any
const sidebar = {
    '/': [
        // { text: '介绍', link: '/',items:[] },
        {
            text: '基础组件',
            items: [
                { text: 'Button 按钮', link: '/components/button/' },
            ]
        },
    ]
}
const config = {
    title: "Hippo-UI",
    description: "组件库搭建学习项目",
    themeConfig: {
        sidebar,
    },
    markdown: {
      config: (md) => {
        // 添加DemoBlock插槽
        const { demoBlockPlugin } = require('vitepress-theme-demoblock')
        md.use(demoBlockPlugin)
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/hippone/hippo-ui'
      }
    ],
    logo: 'https://github.com/hippone/hippo-ui/blob/master/packages/hippo-ui/src/assets/logo.svg'
  }
}
export default config
