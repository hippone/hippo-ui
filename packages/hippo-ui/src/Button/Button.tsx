import { defineComponent, PropType } from "vue";
import { IColor, ISize } from "./interface";
import "uno.css";
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "",
  },
  size: {
    type: String as PropType<ISize>,
    default: "middle",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
};

export default defineComponent({
  name: "HButton",
  props,
  setup(props, { slots }) {
    const prop = props;
    const { color, size, plain, rounded, icon, disabled, text, shadow } = prop;
    const sizeSize = {
      small: {
        x: 1,
        y: 1,
        text: "sm",
      },
      middle: {
        x: 2,
        y: 2,
        text: "base",
      },
      large: {
        x: 5,
        y: 1,
        text: "lg",
      },
      superBig: {
        x: 4,
        y: 4,
        text: "xl",
      },
      superSpecialBig: {
        x: 6,
        y: 5,
        text: "2xl",
      },
    };
    return () => (
      <button
        disabled={disabled}
        class={`
          font-mono
          py-${sizeSize[size].y}
          px-${sizeSize[size].x}
          font-semibold
          ${shadow ? "shadow-md" : ""}
          ${rounded ? "rounded-full" : "rounded-lg"}
          text-${sizeSize[size].text}
          text-${color ? (plain || text ? color : "white") : "gray"}-${
          disabled ? "300" : "500"
        }
          focus:bg-${text ? "gray" : color || "blue"}-${
          color || text ? (plain ? "400" : "300") : "100"
        }
          focus:text-${color ? "white" : "blue"}-500
          focus:border-${plain ? (color || "blue") + "-400" : "blue-300"}
          ${
            disabled
              ? `disabled
            bg-${text ? "white" : color}-200
            cursor-not-allowed`
              : `bg-${color && !text ? color : "white"}-${plain ? "100" : "500"}
            hover:bg-${text ? "gray" : color || "blue"}-${
                  color && !text ? (plain ? "400" : "300") : "100"
                }
            ${text ? "" : `hover:text-${color ? "white" : "blue"}-500`}
            hover:border-${plain ? (color || "blue") + "-400" : "blue-300"}
            cursor-pointer`
          }
          border-${color || "gray"}-300
          ${(color && !plain) || text ? "border-0" : "border-1.5"}
          m-1
        `}
      >
        {icon !== "" ? <i class={`i-ic-baseline-${icon} p-3`}></i> : ""}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
