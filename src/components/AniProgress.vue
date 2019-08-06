<template>
  <div v-if="!circle" :class="[loading ? 'ani-progress-loading-style' : '']">
    <div :class="[loading ? 'ani-progress-loading-inside' : '']"></div>
  </div>
  <div v-else :class="[loading ? 'ani-progress-circle-loading-style' : '']">
    <div class="circle-loading-inside-style">
      <div class="circle-loading-inside-circle"></div>
    </div>
    <div class="loading-inside-hidden"></div>
  </div>
</template>

<script>
export default {
  name: "AniProgress",
  props: {
    loading: Boolean,
    circle: Boolean
  }
};
</script>

<style scoped>
.ani-progress-loading-style {
  height: 15px;
  border-radius: 8px;
  width: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 500ms;
  position: relative;
  overflow: hidden;
}
.ani-progress-loading-style:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}
.ani-progress-loading-style:active {
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.ani-progress-loading-inside {
  height: 15px;
  border-radius: 10px;
  width: 33%;
  transform: translateX(-100%);
  background-color: rgba(0, 0, 0, 0.4);
  animation: 3s animate-loading-progress infinite;
}
@keyframes animate-loading-progress {
  from {
    transform: translateX(-110%);
  }
  to {
    transform: translateX(320%);
  }
}

.ani-progress-circle-loading-style {
  position: relative;
  height: 140px;
  width: 140px;
  border-radius: 150px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
    transition: all 500ms;
}
.ani-progress-circle-loading-style:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}
.ani-progress-circle-loading-style:active {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
.ani-progress-circle-loading-style:hover .circle-loading-inside-style {
    box-shadow:inset 0 0 15px rgba(0, 0, 0, 0.4);
}
.ani-progress-circle-loading-style:active  .circle-loading-inside-style{
    box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.3);
}
@keyframes animate-circle-loading-progress {
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(405deg);
  }
}
.circle-loading-inside-style {
  height: 100px;
  width: 100px;
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 2;
  border-radius: 100px;
  background-color: white;
    box-shadow:inset 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 500ms;
}

.loading-inside-hidden {
  position: absolute;
  height: 70px;
  width: 70px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
  animation: 1s rotate-inside infinite;
}
@keyframes rotate-inside {
  from {
    transform-origin: 70px 70px;
    transform: rotate(45deg);
  }
  to {
    transform-origin: 70px 70px;
    transform: rotate(405deg);
  }
}
</style>
