/*
 * @Author: ROYIANS
 * @Date: 2022/9/30 9:42
 * @Description: 组件注册
 * @sign:
 * ╦═╗╔═╗╦ ╦╦╔═╗╔╗╔╔═╗
 * ╠╦╝║ ║╚╦╝║╠═╣║║║╚═╗
 * ╩╚═╚═╝ ╩ ╩╩ ╩╝╚╝╚═╝
 */
import PtdDesigner from "./home/Home.vue";

import "normalize.css/normalize.css";
import "vue-tree-halower2/dist/halower-tree.min.css";
import "animate.css";
import "@/assets/main.scss";

import NightModeStore from "../stores/modules/index.js";

const componentsLib = {
  PtdDesigner,
};
const install = function (Vue, opts = {}) {
  if (install.installed) return;
  if (!opts.store) {
    console.warn("[print-template-designer] 请提供store！");
    return;
  }
  if (!opts.store.state.printTemplateModule) {
    opts.store.registerModule(["printTemplateModule"], NightModeStore);
  }
  Object.keys(componentsLib).forEach((key) => {
    Vue.component(key, componentsLib[key]);
  });
};
const Api = {
  version: "ROY-PRINT-DESIGNER@0.0.6",
  install,
};
// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default Api;