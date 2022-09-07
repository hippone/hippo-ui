import { App } from 'vue';
import JSXButton from './JSXButton';
import SFCButton from './SFCButton.vue'
import MyButton from './button/index'
import "uno.css"

export { JSXButton, SFCButton, MyButton }

export default {
  install(app:App):void {
    app.component(JSXButton.name,JSXButton)
    app.component(SFCButton.name,SFCButton)
    app.component(MyButton.name,MyButton)
  }
}