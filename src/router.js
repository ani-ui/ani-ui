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
import MenuScrollBar from "./view/menus/MenuScrollBar";
import Design from "./view/Design";
import NotFound from "./view/NotFound";
import MenuTopLoading from "./view/menus/MenuTopLoading";
import MenuPager from "./view/menus/MenuPager";
import MenuRate from "./view/menus/MenuRate";
import MenuDropDown from "./view/menus/MenuDropDown";
import MenuRouterChoose from "./view/menus/MenuRouterChoose";
import routerA from "./view/menus/RouterChoose/routerA";
import routerB from "./view/menus/RouterChoose/routerB";
import MenuInput from "./view/menus/MenuInput";
import MenuCounter from "./view/menus/MenuCounter";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: MainView },
    {
      path: "/component",
      component: ComponentView,
      name:"component",
      redirect:{name:'install'},
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
        { path: "scrollbar", component: MenuScrollBar, name: "scrollbar" },
        { path: "toploading", component: MenuTopLoading, name: "toploading" },
        { path: "pager", component: MenuPager, name: "pager" },
        { path: "rate", component: MenuRate, name: "rate" },
        { path: "dropdown", component: MenuDropDown, name: "dropdown" },
        { path: "input", component: MenuInput, name: "input" },
        { path: "counter", component: MenuCounter, name: "counter" },
        {
          path: "routerchoose",
          component: MenuRouterChoose,
          name: "routerchoose",
          children: [
            { path: "aaa", component: routerA, name: "aaa" },
            { path: "bbb", component: routerB, name: "bbb" }
          ]
        }
      ]
    },
    { path: "/about", component: About },
    { path: "/design", component: Design },
    { path: "/*", component: NotFound }
  ]
});
