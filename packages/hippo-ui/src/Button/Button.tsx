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
    default: false
  }
};

export default defineComponent({
  name: "HButton",
  props,
  setup(props, { slots }) {
    const size = {
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
        y: 3,
        text: "xl",
      },
      superSpecialBig: {
        x: 6,
        y: 4,
        text: "2xl",
      },
    };
    return () => (
      <button
        disabled={props.disabled}
        class={`
          font-mono
          py-${size[props.size].y}
          px-${size[props.size].x}
          font-semibold
          shadow-md
          ${props.rounded ? "rounded-full" : "rounded-lg"}
          text-${size[props.size].text}
          text-${props.color ? props.plain ? props.color : "white" : "gray"}-${props.disabled ? "300" : "500"}
          focus:bg-${props.color || "blue"}-${props.color ? props.plain ? "400" : "300" : "100"}
          focus:text-${props.color ? "white" : "blue"}-500
          focus:border-${props.plain ? (props.color || "blue")+"-400" : "blue-300"}
          ${props.disabled ? "disabled" : ""}
          ${props.disabled ? `bg-${props.color}-200` : `bg-${props.color}-${props.plain ? "100" : "500"}`}
          ${props.disabled ? "" : `hover:bg-${props.color || "blue"}-${props.color ? props.plain ? "400" : "300" : "100"}`}
          ${props.disabled ? "" : `hover:text-${props.color ? "white" : "blue"}-500`}
          ${props.disabled ? "" : `hover:border-${props.plain ? (props.color || "blue")+"-400" : "blue-300"}`}
          ${props.disabled ? "cursor-not-allowed" : "cursor-pointer"}
          border-${props.color || "gray"}-300
          ${props.color ? props.plain ? "border-1.5" : "border-0" : "border-1.5"}
          m-1
        `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
