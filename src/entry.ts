import { App } from "vue";
import MyButton from "./button/Button";
import "uno.css";

export { MyButton };

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
  },
};
