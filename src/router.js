import Vue from "vue";
import Router from "vue-router";
import MainView from "./view/MainView";
import ComponentView from "./view/ComponentView";
import About from "./view/About";
import MenuButton from "./view/menus/MenuButton";
import MenuInstall from "./view/menus/MenuInstall";
import TestJsx from "./view/menus/TestJsx";
import MenuFollower from "./view/menus/MenuFollower";
import MenuDrawer from "./view/menus/MenuDrawer";
import MenuMessage from "./view/menus/MenuMessage";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: MainView },
    {
      path: "/component",
      component: ComponentView,
      children: [
        { path: "", component: MenuInstall, name: "install" },
        { path: "button", component: MenuButton, name: "button" },
        { path: "follower", component: MenuFollower, name: "follower" },
        { path: "drawer", component: MenuDrawer, name: "drawer" },
        { path: "message", component: MenuMessage, name: "message" },
        { path: "test", component: TestJsx, name: "TestJsx" },
      ]
    },
    { path: "/about", component: About }
  ]
});
