import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./less/main.less";
import "normalize.css/normalize.css";
import "./font/firacode.css";
Vue.config.productionTip = false;

import { TweenLite } from "gsap";
Vue.prototype.$Tween = TweenLite;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
