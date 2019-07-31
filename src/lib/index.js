import Vue from "vue";
import AniButton from "../components/AniButton";
import AniIconText from "../components/AniIconText";
import AniDrawer from "../components/AniDrawer"
import AniBackTop from "../components/AniBackTop"
import AniFollower from "../components/AniFollower"
import AniHeader from "../components/AniHeader"
import  "../less/main.less";

const Components = {
  AniButton,
  AniIconText,
  AniHeader,
  AniFollower,
  AniBackTop,
  AniDrawer,
};
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
