<template>
  <div class="ani-pulse--base__style">
    <div class="ani-pulse__style">
      <div
              v-if="!off"
        class="ani-pulse__real"
        :style="{ height: height, width: width,borderRadius:borderRadius }"
      ></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AniPulse",
  props: {
    height: String,
    width: String,
    borderRadius: String,
      off:Boolean
  }
};
</script>

<style scoped>
.ani-pulse--base__style {
  position: relative;
}

.ani-pulse__style {
  display: inline-block;
  position: relative;
}

.ani-pulse__real {
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  transform: translate(-50%, -50%);
  animation: 2s animate-pulse infinite;
}
@keyframes animate-pulse {
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.01);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
