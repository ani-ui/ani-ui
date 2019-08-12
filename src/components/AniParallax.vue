<template>
  <div
    class="ani-parallax-style"
    :style="
      `background: url('${image}') fixed center no-repeat;height: ${
        height ? height : '200'
      }px;`
    "
  ></div>
</template>

<script>
export default {
  name: "AniParallax",
  props: {
    image: String,
    height: Number
  }
};
</script>

<style scoped>
.ani-parallax-style {
  width: 100%;
  background-size: 100% !important;
}
</style>
