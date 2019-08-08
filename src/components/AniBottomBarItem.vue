<template>
  <div class="ani-bottom-bar-item__style">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AniBottomBarItem"
};
</script>

<style scoped>
    .ani-bottom-bar-item__style {
        width: 64px;
        height: 64px;
        line-height: 64px;
        background-color: #fff;
        display: inline-block;
    }
    .ani-bottom-bar-item__style:hover{
        background-color: rgba(0,0,0,0.2);
    }
    .ani-bottom-bar-item__style:active{
        background-color: rgba(0,0,0,0.4);
    }
</style>
