import LGeosearch from "./LGeosearch.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("l-geosearch", LGeosearch);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

LGeosearch.install = install;

export default LGeosearch;