import Vue from 'vue'
import AniButton from "../components/AniButton";
import "../less/main.less"
const Components={
  AniButton,
};
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
