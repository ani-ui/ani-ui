<template>
  <ani-content>
    <ani-side-bar :width="300"></ani-side-bar>
    <ani-main></ani-main>
  </ani-content>
</template>

<script>
  import AniContent from "../components/AniContent";
  import AniSideBar from "../components/AniSideBar";
  import AniMain from "../components/AniMain";
  export default {
    name: "ComponentView",
   components: { AniMain, AniSideBar, AniContent }
  }
</script>

<style scoped>

</style>
