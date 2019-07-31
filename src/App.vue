<template>
  <div id="app">
    <ani-drawer :drawer-open.sync="menuOpened" blur direction="right"></ani-drawer>
    <ani-header :menu-opened-prop.sync="menuOpened" title="Ani UI" :link="[{name:'test',href:'#'},{name:'test2',href:'#'}]" >
    </ani-header>
  </div>
</template>


<script>
import AniHeader from "./components/AniHeader";
import AniDrawer from "./components/AniDrawer";
export default {
  components: {AniDrawer, AniHeader },
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
