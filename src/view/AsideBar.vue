<template>
  <ani-menu direction="vertical" divider router>
    <ani-menu-title title="入门指南"></ani-menu-title>
    <ani-menu-item link="install">安装</ani-menu-item>
    <ani-menu-title title="布局"></ani-menu-title>
    <ani-menu-item link="layout">栅格系统</ani-menu-item>
    <ani-menu-item link="structure">框架</ani-menu-item>
    <ani-menu-item link="bottombar">底部导航栏</ani-menu-item>
    <ani-menu-item link="font">字体</ani-menu-item>
    <ani-menu-title title="动画"></ani-menu-title>
    <ani-menu-item link="animation">动画效果</ani-menu-item>
    <ani-menu-title title="基础组件"></ani-menu-title>
    <ani-menu-item link="button" sub-title="ani-button">按钮</ani-menu-item>
    <ani-menu-item link="switch" sub-title="ani-switch">开关</ani-menu-item>
    <ani-menu-item link="checkbox" sub-title="ani-checkbox">选框</ani-menu-item>
    <ani-menu-item link="input" sub-title="ani-input">输入框</ani-menu-item>
    <ani-menu-item link="dropdown" sub-title="ani-dropdown">下拉菜单</ani-menu-item>
    <ani-menu-item link="table" sub-title="ani-table">表格</ani-menu-item>
    <ani-menu-title title="特殊组件"></ani-menu-title>
    <ani-menu-item link="follower" sub-title="ani-follower">鼠标跟随</ani-menu-item>
    <ani-menu-item link="drawer" sub-title="ani-drawer">抽屉</ani-menu-item>
    <ani-menu-item link="message">消息通知</ani-menu-item>
    <ani-menu-item link="backtop" sub-title="ani-back-top">回到顶部</ani-menu-item>
    <ani-menu-item link="float" sub-title="ani-float-button">浮动按钮</ani-menu-item>
    <ani-menu-item link="box" sub-title="ani-box">盒子</ani-menu-item>
    <ani-menu-item link="progress" sub-title="ani-progress">进度条</ani-menu-item>
    <ani-menu-item link="dialog" sub-title="ani-dialog">对话框</ani-menu-item>
    <ani-menu-item link="tooltip" sub-title="ani-tooltip">提示</ani-menu-item>
    <ani-menu-item link="scrollbar" sub-title="ani-scrollbar">滚动条</ani-menu-item>
    <ani-menu-item link="toploading" sub-title="ani-top-loading">顶部加载条</ani-menu-item>
    <ani-menu-item link="pager" sub-title="ani-pager">分页器</ani-menu-item>
    <ani-menu-item link="rate" sub-title="ani-rate">评分栏</ani-menu-item>
    <ani-menu-item link="routerchoose" sub-title="ani-router-choose">路由选择器</ani-menu-item>
    <ani-menu-item link="counter" sub-title="ani-counter">计数器</ani-menu-item>
    <ani-menu-item link="timenow" sub-title="ani-time-now">即时时间</ani-menu-item>
    <ani-menu-item link="parallax" sub-title="ani-parallax">视差效果</ani-menu-item>
    <ani-menu-item link="carousel" sub-title="ani-carousel">轮播</ani-menu-item>
    <ani-menu-item link="tag" sub-title="ani-tag">标签</ani-menu-item>
    <ani-menu-item link="badge" sub-title="ani-badge">标记</ani-menu-item>
    <ani-menu-item link="slider" sub-title="ani-slider">滑动条</ani-menu-item>
    <ani-menu-item link="colorPicker" sub-title="ani-color-picker">拾色器</ani-menu-item>
    <ani-menu-item link="fancyloading" sub-title="ani-fancy-loading">炫酷加载</ani-menu-item>
    <ani-menu-title title="特效"></ani-menu-title>
    <ani-menu-item link="cloud" sub-title="ani-cloud">模拟云</ani-menu-item>
    <ani-menu-item link="weather" sub-title="ani-weather">天气</ani-menu-item>
    <ani-menu-item link="clock" sub-title="ani-clock">模拟时钟</ani-menu-item>
    <ani-menu-item link="pulse" sub-title="ani-pulse">脉冲</ani-menu-item>
    <ani-menu-item link="">
      <i class="material-icons">favorite</i>
    </ani-menu-item>
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
