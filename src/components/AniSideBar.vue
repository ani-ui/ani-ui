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
    margin-right: 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  }
</style>
