<template>
  <div id="app">
    <ani-back-top></ani-back-top>
    <ani-drawer :drawer-open.sync="menuOpened"></ani-drawer>
    <ani-header :menu-opened-prop.sync="menuOpened" title="Ani UI" :link="link" router>
    </ani-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div style="height: 2000px;"></div>
  </div>
</template>

<script>
import AniHeader from "./components/AniHeader";
import AniDrawer from "./components/AniDrawer";
import AniBackTop from "./components/AniBackTop";
export default {
  components: {
    AniBackTop,
    AniDrawer,
    AniHeader
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
  watch: {
    menuOpened(value) {
      window.console.log(value ? "menu is opened" : "menu not open");
    }
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
