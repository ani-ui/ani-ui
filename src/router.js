import Vue from "vue";
import Router from "vue-router";
import MainView from "./view/MainView";
import ComponentView from "./view/ComponentView";
import About from "./view/About";
import MenuButton from "./view/menus/MenuButton";
import MenuInstall from "./view/menus/MenuInstall";
import MenuFollower from "./view/menus/MenuFollower";
import MenuDrawer from "./view/menus/MenuDrawer";
import MenuMessage from "./view/menus/MenuMessage";
import MenuBacktop from "./view/menus/MenuBacktop";
import MenuStructure from "./view/menus/MenuStructure";
import MenuLayout from "./view/menus/MenuLayout";
import MenuFloatButton from "./view/menus/MenuFloatButton";
import MenuBox from "./view/menus/MenuBox";
import MenuProgress from "./view/menus/MenuProgress";
import MenuDialog from "./view/menus/MenuDialog";
import MenuTooltip from "./view/menus/MenuTooltip";
import MenuSwitch from "./view/menus/MenuSwitch";
import MenuCheckbox from "./view/menus/MenuCheckbox";
import MenuBottomBar from "./view/menus/MenuBottomBar";

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
        { path: "float", component: MenuFloatButton, name: "float" },
        { path: "box", component: MenuBox, name: "box" },
        { path: "progress", component: MenuProgress, name: "progress" },
        { path: "dialog", component: MenuDialog, name: "dialog" },
        { path: "tooltip", component: MenuTooltip, name: "tooltip" },
        { path: "switch", component: MenuSwitch, name: "switch" },
        { path: "checkbox", component: MenuCheckbox, name: "checkbox" },
        { path: "bottombar", component: MenuBottomBar, name: "bottombar" },
      ]
    },
    { path: "/about", component: About }
  ]
});
