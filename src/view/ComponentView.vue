<template>
  <ani-content>
    <ani-side-bar :width="300">
      <ani-menu direction="vertical" divider router>
        <ani-menu-title title="入门指南"></ani-menu-title>
        <ani-menu-item link="install">安装</ani-menu-item>
        <ani-menu-title title="组件"></ani-menu-title>
        <ani-menu-item link="button">按钮</ani-menu-item>
      </ani-menu>
    </ani-side-bar>
    <ani-main>
      <router-view></router-view>
    </ani-main>
  </ani-content>
</template>

<script>
  import AniContent from "../components/AniContent";
  import AniSideBar from "../components/AniSideBar";
  import AniMain from "../components/AniMain";
  import AniMenu from "../components/AniMenu/AniMenu";
  import AniMenuItem from "../components/AniMenu/AniMenuItem";
  import AniMenuTitle from "../components/AniMenu/AniMenuTitle";
  export default {
    name: "ComponentView",
   components: {AniMenuTitle, AniMenuItem, AniMenu, AniMain, AniSideBar, AniContent }
  }
</script>

<style scoped>

</style>
