import Vue from "vue";
import Router from "vue-router";
import MainView from "./view/MainView";
import ComponentView from "./view/ComponentView";
import About from "./view/About";

Vue.use(Router);

export default new Router({
  routes: [
    {path:"/",component:MainView},
    {path:"/component",component:ComponentView},
    {path:"/about",component:About},
  ]
});
