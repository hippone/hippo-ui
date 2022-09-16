import Theme from 'vitepress/theme'
import HippoUI from '../../../src/entry'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'



export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(HippoUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}