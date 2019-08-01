<template>
  <div id="app">
    <ani-back-top></ani-back-top>
    <ani-drawer :drawer-open.sync="menuOpened"></ani-drawer>
    <ani-header :menu-opened-prop.sync="menuOpened" title="Ani UI">
      <ani-header-link router link="/">Home</ani-header-link>
      <ani-header-link router link="/component">Component</ani-header-link>
      <ani-header-link link="https://github.com/laiiihz/ani-ui">
        <svg-github style="vertical-align: middle"></svg-github>
      </ani-header-link>
    </ani-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div style="height: 2000px;">
    </div>
  </div>
</template>

<script>
import AniHeader from "./components/AniHeader";
import AniDrawer from "./components/AniDrawer";
import AniBackTop from "./components/AniBackTop";
import AniHeaderLink from "./components/AniHeaderLink";
import SvgGithub from "./view/svg/SvgGithub";
export default {
  components: {
    SvgGithub,
    AniHeaderLink,
    AniBackTop,
    AniDrawer,
    AniHeader,
  },

  data() {
    return {
      testStatus: false,
      menuOpened: false,
      link: [
        { name: "主页", href: "/" },
        { name: "组件", href: "component" },
        { name: "关于", href: "about" }]
    };
  },
};
</script>
<style lang="less">
#app {
  font-family: "Fira Code", "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
