<template>
  <ani-content>
    <ani-side-bar :width="320">
      <aside-bar/>
    </ani-side-bar>
    <ani-main style="width: 400px">
      <router-view></router-view>
    </ani-main>
  </ani-content>
</template>

<script>
  import AniContent from "../components/AniContent";
  import AniSideBar from "../components/AniSideBar";
  import AniMain from "../components/AniMain";
  import AsideBar from "./AsideBar";

  export default {
    name: "ComponentView",
   components: {AsideBar, AniMain, AniSideBar, AniContent }
  }
</script>

