<template>
  <div class="ani-fancy-loading-base__style">
    <div v-if="fullscreen" class="ani-fancy-loading-full-mask"></div>
    <div
      :class="[
        fullscreen
          ? 'ani-fancy-loading--outter__full_screen'
          : 'ani-fancy-loading--outter'
      ]"
    >
      <div :class="[`ani-fancy-loading-${name}`]"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AniFancyLoading",
  props: {
    fullscreen: Boolean,
    name: String
  }
};
</script>

<style lang="less">
    @import "../less/loadingKeyframe";
.ani-fancy-loading-full-mask {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.ani-fancy-loading-base__style {
  position: relative;
}
.ani-fancy-loading--outter {
  position: relative;
}
.ani-fancy-loading--outter__full_screen {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>
