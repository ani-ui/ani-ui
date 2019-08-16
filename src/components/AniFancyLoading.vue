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

<style lang="less" scoped>
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

.ani-fancy-loading-standard {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  position: relative;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: 0.7s animate-standard-rotate infinite linear;
}
.ani-fancy-loading-standard::after {
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: black;
  box-shadow: 0 0 10px black, 0 34px 0 black, 0 34px 10px black;
  left: 20px;
  top: 3px;
}
@keyframes animate-standard-rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.ani-fancy-loading-balls {
  height: 50px;
  width: 50px;
  position: relative;
  overflow: hidden;
}
.ani-fancy-loading-balls::after {
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  left: -15px;
  top: 5px;
  border-radius: 10px;
  background-color: transparent;
  box-shadow: 10px 0 black, 40px 30px black;
  animation: 1s animate-balls-move infinite cubic-bezier(0.5, 0, 0, 0.5);
}
@keyframes animate-balls-move {
  from {
    height: 10px;
    width: 10px;
    box-shadow: 20px 0 black, 50px 30px black, 20px 30px black, 50px 0 black;
  }
  50% {
    height: 15px;
    width: 15px;
    box-shadow: 50px 0 black, 20px 30px black, 20px 0 black, 50px 30px black;
  }
  to {
    height: 10px;
    width: 10px;
    box-shadow: 50px 30px black, 20px 0 black, 50px 0 black, 20px 30px black;
  }
}

.ani-fancy-loading-rec {
  height: 50px;
  width: 50px;
  position: relative;
}
.ani-fancy-loading-rec::after {
  content: "";
  height: 40px;
  width: 40px;
  background-color: black;
  position: absolute;
  animation: 2s animate-rec-rotate infinite;
  transform-origin: 20px 20px;
}
@keyframes animate-rec-rotate {
  from {
    transform: rotateY(0) rotateX(0);
  }
  50% {
    transform: rotateY(180deg) rotateX(0);
  }
  to {
    transform: rotateY(180deg) rotateX(180deg);
  }
}

.ani-fancy-loading-3ball {
  height: 50px;
  width: 70px;
  position: relative;
  overflow: hidden;
}
.ani-fancy-loading-3ball::after {
  content: "";
  height: 10px;
  width: 10px;
  border-radius: 10px;
  top: 50%;
  left: -13px;
  transform: translateY(-50%);
  background-color: black;
  position: absolute;
  box-shadow: 13px 0 0 black, 26px 0 0 black, 39px 0 0 black;
  animation: 0.5s animate-3ball-rotate infinite;
}
@keyframes animate-3ball-rotate {
  from {
    box-shadow: 26px 0 0 -5px black, 26px 0 black, 39px 0 black, 52px 0 black;
  }
  to {
    box-shadow: 26px 0 black, 39px 0 black, 52px 0 black, 58px 0 0 -5px black;
  }
}

.ani-fancy-loading-pulse {
  height: 50px;
  width: 50px;
  position: relative;
  overflow: hidden;
}
.ani-fancy-loading-pulse::after {
  content: "";
  height: 50px;
  width: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%) scale(0);
  animation: 1.5s animate-pulse-rotate infinite;
}
.ani-fancy-loading-pulse::before {
  content: "";
  height: 50px;
  width: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
  animation: 1.5s animate-pulse-rotate infinite;
  animation-delay: 0.5s;
}
@keyframes animate-pulse-rotate {
  from {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}

.ani-fancy-loading-square-beat {
  height: 50px;
  width: 50px;
  position: relative;
}
.ani-fancy-loading-square-beat::after {
  content: "";
  height: 15px;
  width: 15px;
  left: -15px;
  top: 0;
  background-color: transparent;
  position: absolute;
  box-shadow: 20px 5px black, 45px 5px black, 20px 30px black, 45px 30px black;
  animation: 1.5s animate-square-beat-rotate infinite reverse linear;
}
@keyframes animate-square-beat-rotate {
  from {
    box-shadow: 25px 10px rgba(0, 0, 0, 0.7), 40px 10px rgba(0, 0, 0, 0.5),
      40px 25px rgba(0, 0, 0, 0.3), 20px 30px 0 2px rgba(0, 0, 0, 0.9);
  }
  25% {
    box-shadow: 20px 5px 0 2px rgba(0, 0, 0, 0.9), 40px 10px rgba(0, 0, 0, 0.7),
      40px 25px rgba(0, 0, 0, 0.5), 25px 25px rgba(0, 0, 0, 0.3);
  }
  50% {
    box-shadow: 25px 10px rgba(0, 0, 0, 0.3), 45px 5px 0 2px rgba(0, 0, 0, 0.9),
      40px 25px rgba(0, 0, 0, 0.7), 25px 25px rgba(0, 0, 0, 0.5);
  }
  75% {
    box-shadow: 25px 10px rgba(0, 0, 0, 0.5), 40px 10px rgba(0, 0, 0, 0.3),
      45px 30px 0 2px rgba(0, 0, 0, 0.9), 25px 25px rgba(0, 0, 0, 0.7);
  }
  to {
    box-shadow: 25px 10px rgba(0, 0, 0, 0.7), 40px 10px rgba(0, 0, 0, 0.5),
      40px 25px rgba(0, 0, 0, 0.3), 20px 30px 0 2px rgba(0, 0, 0, 0.9);
  }
}
</style>
