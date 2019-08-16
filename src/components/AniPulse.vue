<template>
  <div class="ani-pulse--base__style">
    <div class="ani-pulse__style" v-if="!off">
      <div
        v-for="item in count ? count : 1"
        :key="item"
        class="ani-pulse__real"
        :style="{
          height: height,
          width: width,
          borderRadius: borderRadius,
          backgroundColor: color ? color : 'rgba(0,0,0,0.3)',
          animationDelay: `${item * (delay ? delay : 0.1)}s`
        }"
      ></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AniPulse",
  props: {
    height: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    borderRadius: {
      type: String,
      required: true
    },
    off: Boolean,
    color: String,
    count: Number,
    delay: Number
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
  transform: translate(-50%, -50%) scale(0.01);
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
