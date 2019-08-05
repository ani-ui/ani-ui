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
import MenuBacktop from "./view/menus/MenuBacktop";
import MenuStructure from "./view/menus/MenuStructure";
import MenuLayout from "./view/menus/MenuLayout";

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
        { path: "backtop", component: MenuBacktop, name: "backtop" },
        { path: "layout", component: MenuLayout, name: "layout" },
        { path: "structure", component: MenuStructure, name: "structure" },
        { path: "test", component: TestJsx, name: "TestJsx" },
      ]
    },
    { path: "/about", component: About }
  ]
});
