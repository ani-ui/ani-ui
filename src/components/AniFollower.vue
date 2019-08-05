<template>
  <div class="ani-follower-style" :style="`top:${clientY}px;left:${clientX}px`">
    <div style="position: absolute;top: 5px;left: 5px" >
     <i class="material-icons">{{ icon }}</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "AniFollower",
  mounted() {
    document.body.style.cursor = "none";
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
  },
  beforeDestroy(){
    document.body.style.cursor = "auto";
  },
  props: {
    icon:String,
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
