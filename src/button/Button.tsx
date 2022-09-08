import { defineComponent,PropType,toRefs } from "vue/dist/vue.esm-bundler.js";
import "uno.css";
export type IColor = 'black' | 'gray' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export type ISize = 'small' | 'middle' | 'large' | 'superBig' | 'superSpecialBig' 
export const props = {
  color:{
    type: String as PropType<IColor>,
    default: 'blue'
  },
  size:{
    type: String as PropType<ISize>,
    default: 'middle'
  },
  plain: {
    type: Boolean,
    default:false,
  },
  rounded: {
    type: Boolean,
    default:false,
  },
  icon: {
    type: String,
    default: ""
  }
}
export default defineComponent({
  name:"SButton",
  props,
  setup(props,{slots}){
    const size = {
      small:{
        x:2,
        y:1,
        text:"sm"
      },
      middle:{
        x:3,
        y:1.5,
        text:"base"
      },
      large:{
        x:4,
        y:2,
        text:"lg"
      },
      superBig:{
        x:5,
        y:2.5,
        text:"xl"
      },
      superSpecialBig:{
        x:6,
        y:3,
        text:"2xl"
      },
    }
    return ()=><button
    class={`
    py-${size[props.size].y}
    px-${size[props.size].x}
    font-semibold
    shadow-md
    ${props.rounded ? "rounded-full" : "rounded-lg"}
    text-${size[props.size].text}
    text-${props.plain ? props.color+"-500" : "white"}
    bg-${props.color}-${props.plain ? '300' : '500'}
    hover:bg-${props.color}-${props.plain ? '400' : '700'}
    border-${props.color}-${props.plain ? "400" : "500"}
    border-solid
    cursor-pointer
    m-1
    `}
    >
      {props.icon !== "" ? (
        <i class={`i-ic-baseline-${props.icon} p-3`}></i>
      ) : (
        ""
      )}
      {slots.default ? slots.default() : "Button"}
    </button>
  }
})