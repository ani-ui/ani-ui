import Vue from "vue";
import AniButton from "../components/AniButton";
import AniIconText from "../components/AniIconText";
import "../less/main.less";

const Components = {
  AniButton,
  AniIconText
};
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
