<template>
  <ani-menu direction="vertical" divider router>
    <ani-menu-title title="入门指南"></ani-menu-title>
    <ani-menu-item link="install">安装</ani-menu-item>
    <ani-menu-title title="组件"></ani-menu-title>
    <ani-menu-item link="button">按钮</ani-menu-item>
    <ani-menu-item link="follower">鼠标跟随</ani-menu-item>
    <ani-menu-item link="drawer">抽屉</ani-menu-item>
    <ani-menu-item link="message">消息通知</ani-menu-item>
  </ani-menu>
</template>
<script>
import AniMenu from "../components/AniMenu/AniMenu";
import AniMenuItem from "../components/AniMenu/AniMenuItem";
import AniMenuTitle from "../components/AniMenu/AniMenuTitle";

export default {
  name: "aside-bar",
  components: { AniMenu, AniMenuItem, AniMenuTitle }
};
</script>
