<template>
  <ani-menu direction="vertical" divider router>
    <ani-menu-title title="入门指南"></ani-menu-title>
    <ani-menu-item link="install">安装</ani-menu-item>
    <ani-menu-title title="布局"></ani-menu-title>
    <ani-menu-item link="layout">栅格系统</ani-menu-item>
    <ani-menu-item link="structure">框架</ani-menu-item>
    <ani-menu-item link="bottombar">底部导航栏</ani-menu-item>
    <ani-menu-item link="font">字体</ani-menu-item>
    <ani-menu-title title="基础组件"></ani-menu-title>
    <ani-menu-item link="button">按钮</ani-menu-item>
    <ani-menu-item link="switch">开关</ani-menu-item>
    <ani-menu-item link="checkbox">选框</ani-menu-item>
    <ani-menu-item link="input">输入框</ani-menu-item>
    <ani-menu-item link="dropdown">下拉菜单</ani-menu-item>
    <ani-menu-title title="特殊组件"></ani-menu-title>
    <ani-menu-item link="follower">鼠标跟随</ani-menu-item>
    <ani-menu-item link="drawer">抽屉</ani-menu-item>
    <ani-menu-item link="message">消息通知</ani-menu-item>
    <ani-menu-item link="backtop">回到顶部</ani-menu-item>
    <ani-menu-item link="float">浮动按钮</ani-menu-item>
    <ani-menu-item link="box">盒子</ani-menu-item>
    <ani-menu-item link="progress">进度条</ani-menu-item>
    <ani-menu-item link="dialog">对话框</ani-menu-item>
    <ani-menu-item link="tooltip">提示</ani-menu-item>
    <ani-menu-item link="scrollbar">滚动条</ani-menu-item>
    <ani-menu-item link="toploading">顶部加载条</ani-menu-item>
    <ani-menu-item link="pager">分页器</ani-menu-item>
    <ani-menu-item link="rate">评分栏</ani-menu-item>
    <ani-menu-item link="routerchoose">路由选择器</ani-menu-item>
    <ani-menu-item link="counter">计数器</ani-menu-item>
    <ani-menu-item link="timenow">即时时间</ani-menu-item>
    <ani-menu-item link="parallax">视差效果</ani-menu-item>
    <ani-menu-item link="carousel">轮播</ani-menu-item>
    <ani-menu-item link="tag">标签</ani-menu-item>
    <ani-menu-item link="badge">标记</ani-menu-item>
    <ani-menu-item link="slider">滑动条</ani-menu-item>
    <ani-menu-item link="colorPicker">拾色器</ani-menu-item>
    <ani-menu-title title="特效"></ani-menu-title>
    <ani-menu-item link="cloud">模拟云</ani-menu-item>

      <div style="height: 64px;"> </div>
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
