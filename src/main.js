import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./less/main.less";
import "normalize.css/normalize.css";
import "./font/firacode.css";
Vue.config.productionTip = false;
import "vue-prism-editor/dist/VuePrismEditor.css";
import { TweenLite } from "gsap";
import Message from "./components/Message/index";
Vue.prototype.$message = Message;
Vue.prototype.$Tween = TweenLite;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
