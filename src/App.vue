<template>
  <div id="app">
    <ani-header title="Ani UI" :link="[{name:'test',href:'#'},{name:'test',href:'#'}]">
    </ani-header>
    <ani-button>
      test
    </ani-button>
  </div>
</template>


<script>
import AniButton from "./components/AniButton";
import AniHeader from "./components/AniHeader";
export default {
  components: {AniHeader, AniButton },
  data() {
    return {
      testStatus: false
    };
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
