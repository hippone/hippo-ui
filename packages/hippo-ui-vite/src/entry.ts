import { App } from "vue";
import HButton from "./button/Button";
import "uno.css";

export default {
  install(app: App): void {
    app.component(HButton.name, HButton);
  },
};
