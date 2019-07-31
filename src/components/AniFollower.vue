<template>
  <div
    class="ani-follower-style"
    :style="`top:${clientY}px;left:${clientX}px`"
  ></div>
</template>

<script>
export default {
  name: "AniFollower",
  mounted() {
    document.body.style.cursor = 'none';
    let vthis = this;
    window.onmousemove = function(e) {
      vthis.clientX = e.clientX;
      vthis.clientY = e.clientY;
    };
  },
  data() {
    return {
      clientX: 0,
      clientY: 0
    };
  }
};
</script>

<style scoped>
.ani-follower-style {
  position: fixed;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  z-index: 1000;
  background-color: #249eff;
}
</style>
