import { App } from "vue";
import SButton from "./button/Button";
import "uno.css";

export default {
  install(app: App): void {
    app.component(SButton.name, SButton);
  },
};
