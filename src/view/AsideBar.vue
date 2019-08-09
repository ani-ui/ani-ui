<template>
  <ani-menu direction="vertical" divider router>
    <ani-menu-title title="入门指南"></ani-menu-title>
    <ani-menu-item link="install">安装</ani-menu-item>
    <ani-menu-title title="布局"></ani-menu-title>
    <ani-menu-item link="layout">栅格系统</ani-menu-item>
    <ani-menu-item link="structure">框架</ani-menu-item>
    <ani-menu-title title="组件"></ani-menu-title>
    <ani-menu-item link="button">按钮</ani-menu-item>
    <ani-menu-item link="follower">鼠标跟随</ani-menu-item>
    <ani-menu-item link="drawer">抽屉</ani-menu-item>
    <ani-menu-item link="message">消息通知</ani-menu-item>
    <ani-menu-item link="backtop">回到顶部</ani-menu-item>
    <ani-menu-item link="float">浮动按钮</ani-menu-item>
    <ani-menu-item link="box">盒子</ani-menu-item>
    <ani-menu-item link="progress">进度条</ani-menu-item>
    <ani-menu-item link="dialog">对话框</ani-menu-item>
    <ani-menu-item link="tooltip">提示</ani-menu-item>
    <ani-menu-item link="switch">开关</ani-menu-item>
    <ani-menu-item link="checkbox">选框</ani-menu-item>
    <ani-menu-item link="bottombar">底部导航栏</ani-menu-item>
    <ani-menu-item link="scrollbar">滚动条</ani-menu-item>
    <ani-menu-item link="toploading">顶部加载条</ani-menu-item>
    <ani-menu-item link="pager">分页器</ani-menu-item>

      <div style="height: 200px;"> </div>
  </ani-menu>
</template>
<script>
import AniMenu from "../components/AniMenu/AniMenu";
import AniMenuItem from "../components/AniMenu/AniMenuItem";
import AniMenuTitle from "../components/AniMenu/AniMenuTitle";
export default {
  name: "aside-bar",
  components: { AniMenu, AniMenuItem, AniMenuTitle },

  methods: {
    handleTestClick() {
    window.console.log(this.$route.name)
    }
  }
};
</script>
