<template>
  <div id="app">
    <ani-follower
      :normal="$store.state.mouseFollow"
      icon="face"
      v-if="$store.state.mouseFollow"
    ></ani-follower>
    <ani-back-top target="main-over"></ani-back-top>
    <ani-drawer :drawer-open.sync="menuOpened" direction="bottom">
      <img src="./assets/logo-main.png" alt="" height="300">
    </ani-drawer>
    <ani-header :menu-opened-prop.sync="menuOpened" title="Ani UI">
      <ani-header-link router link="/">主页</ani-header-link>
      <ani-header-link router link="/component">组件</ani-header-link>
      <ani-header-link router link="/about">关于</ani-header-link>
      <ani-header-link link="https://github.com/laiiihz/ani-ui">
        <svg-github style="vertical-align: middle"></svg-github>
      </ani-header-link>
    </ani-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import AniHeader from "./components/AniHeader";
import AniDrawer from "./components/AniDrawer";
import AniBackTop from "./components/AniBackTop";
import AniHeaderLink from "./components/AniHeaderLink";
import SvgGithub from "./view/svg/SvgGithub";
import AniFollower from "./components/AniFollower";
export default {
  components: {
    SvgGithub,
    AniHeaderLink,
    AniBackTop,
    AniDrawer,
    AniHeader,
    AniFollower
  },

  data() {
    return {
      testStatus: false,
      menuOpened: false
    };
  }
};
</script>
<style lang="less">
#app {
  font-family: "Fira Code", "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
