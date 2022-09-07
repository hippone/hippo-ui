import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from './config/unocss'
const rollupOptions = {
  external: ["vue","vue-router"],
  output: {
    globals:{
      vue:'Vue'
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss()
  ],
  build:{
    rollupOptions,
    minify: `terser`, // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    lib:{
      entry: "./src/entry.ts",
      name:"SmartyUI",
      fileName:"smart-ui",
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
  },
})