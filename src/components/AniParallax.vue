<template>
  <div
    class="ani-parallax-style"
    :style="
      `background: url('${image}') fixed center no-repeat ;height: ${
        height ? height : '200'
      }px;`
    "
  >
    <div
      style="position: absolute;top: 50%;left:50%;transform: translate(-50%,-50%)"
    >
      <slot></slot>
    </div>
  </div>
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
  position: relative;
  text-align: center;
  background-size: cover !important;
}
</style>
