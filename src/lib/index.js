import Vue from "vue";
import AniButton from "../components/AniButton";
import AniIconText from "../components/AniIconText";
import AniDrawer from "../components/AniDrawer";
import AniBackTop from "../components/AniBackTop";
import AniFollower from "../components/AniFollower";
import AniHeader from "../components/AniHeader";
import AniSideBar from "../components/AniSideBar";
import AniCard from "../components/AniCard";
import AniCodeBlock from "../components/AniCodeBlock";
import AniMain from "../components/AniMain";
import AniScrollBar from "../components/AniScrollBar";
import AniContent from "../components/AniContent";
import Message from "../components/Message/index";
import AniHeaderLink from "../components/AniHeaderLink";
import "../less/main.less";

const Components = {
  AniButton,
  AniIconText,
  AniHeader,
  AniHeaderLink,
  AniFollower,
  AniBackTop,
  AniDrawer,
  AniCard,
  AniCodeBlock,
  AniContent,
  AniMain,
  AniScrollBar,
  AniSideBar,
};
Vue.prototype.$message=Message;
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
