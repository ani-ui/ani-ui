<template>
  <div id="app">
    <ani-follower></ani-follower>
    <ani-back-top></ani-back-top>
    <ani-drawer :drawer-open.sync="menuOpened"></ani-drawer>
    <ani-header :menu-opened-prop.sync="menuOpened" title="Ani UI" :link="[{name:'test',href:'#'},{name:'test2',href:'#'}]" >
    </ani-header>
    <div style="height: 2000px;"></div>
  </div>
</template>


<script>
import AniHeader from "./components/AniHeader";
import AniDrawer from "./components/AniDrawer";
import AniBackTop from "./components/AniBackTop";
import AniFollower from "./components/AniFollower";
export default {
  components: {AniFollower, AniBackTop, AniDrawer, AniHeader },

  data() {
    return {
      testStatus: false,
      menuOpened:false,
    };
  },
  watch:{
    menuOpened(value){
      window.console.log(value?'menu is opened':'menu not open')
    }
  }
};
</script>
<style lang="less">
  #app {
    font-family: "Fira Code", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
