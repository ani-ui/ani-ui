<template>
  <div id="app">
    <div>
      <ani-button @click="testStatus=true">open</ani-button>
      <ani-button :disable="testStatus" >default</ani-button>
    </div>
    <div id="nav" style="display: none;">
      <ani-button size="xs">extra small</ani-button>
      <ani-button size="sm">small</ani-button>
      <ani-button size="md">medium</ani-button>
      <ani-button size="lg">large</ani-button>
      <ani-button size="xl">extra large</ani-button>
    </div>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
  import AniButton from "./components/AniButton";
  export default {
    components: {AniButton},
    data(){
      return {
        testStatus:false
      }
    },
  }
</script>
