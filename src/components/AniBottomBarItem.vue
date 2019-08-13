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
        background-color: transparent;
        display: inline-block;
        transition: all 500ms;
        user-select: none;
    }
    .ani-bottom-bar-item__style:hover{
        background-color: rgba(0,0,0,0.2);
    }
    .ani-bottom-bar-item__style:active{
        background-color: rgba(0,0,0,0.5);
        color: white;
    }
</style>
