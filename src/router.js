import Vue from "vue";
import Router from "vue-router";
import MainView from "./view/MainView";
import ComponentView from "./view/ComponentView";
import About from "./view/About";
import MenuButton from "./view/menus/MenuButton";
import MenuInstall from "./view/menus/MenuInstall";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: MainView },
    { path: "/component", component: ComponentView ,children:[
        {path:"button",component:MenuButton,name:'button'},
        {path:"install",component:MenuInstall,name:'install'},
      ] },
    { path: "/about", component: About }
  ]
});
