import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
const safelist = [
  ...colors.map((v) => `bg-${v}-200`),
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-100`),
  ...colors.map((v) => `focus:bg-${v}-300`),
  ...colors.map((v) => `focus:bg-${v}-400`),
  ...colors.map((v) => `focus:bg-${v}-100`),
  ...colors.map((v) => `hover:border-${v}-400`),
  ...colors.map((v) => `hover:text-${v}-500`),
  ...colors.map((v) => `border-${v}-300`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `text-${v}-300`),
  "hover:border-blue-300",
  "text-white",
  "disabled",
  "cursor-not-allowed",
  "font-mono",
  "font-serif",
  ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
  ...["sm", "base", "lg", "xl", "2xl"].map((v) => `text-${v}`),
  ...["rounded-lg", "rounded-full"],
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
  ].map((v) => `i-ic-baseline-${v}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
