<template>
<div class="ani-side-bar-style" :style="`width: ${width}px`">
  <slot></slot>
</div>
</template>

<script>
  export default {
    name: "AniSideBar",
    props:{
      width:Number
    }
  }
</script>

<style scoped>
  .ani-side-bar-style {
    width: 200px;
    overflow: auto;
    background-color: rgba(0,0,0,.12);
  }
</style>
