import { defineComponent, createVNode, createTextVNode, openBlock, createElementBlock } from "vue";
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const __uno = "";
const MyButton = defineComponent({
  name: "SButton",
  setup(props, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
    py-2
    px-4
    font-semibold
    rounded-lg
    shadow-md
    text-white
    bg-green-500
    hover:bg-green-700
    border-none
    cursor-pointer
  `
    }, [slots.default ? slots.default() : ""]);
  }
});
const entry = {
  install(app) {
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
    app.component(MyButton.name, MyButton);
  }
};
export {
  JSXButton,
  MyButton,
  SFCButton,
  entry as default
};
