<template>
  <div v-if="!circle" class="ani-progress-loading-style">
    <div class="ani-progress-loading-inside" v-if="loading"></div>
    <div :style="`width:${animatePercent}%`" class="ani-progress-default" v-else></div>
  </div>
  <div v-else class="ani-progress-circle-loading-style">
    <div class="circle-loading-inside-style">
      <div class="circle-loading-inside-circle"></div>
    </div>
    <div v-if="loading" class="loading-inside-hidden"></div>
    <div v-else style="height: 140px;width: 140px;">
      <canvas id="canvas-circle"></canvas>
    </div>
  </div>
</template>

<script>
import { TweenLite, Power3 } from "gsap";
export default {
  mounted() {
    if (this.circle) {
      let canvas = document.getElementById("canvas-circle");
      let ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(
        70,
        70,
        70,
        Math.PI * 1.5,
        ((Math.PI * 2) / 100) * this.percent + Math.PI * -0.5
      );
      ctx.lineTo(70, 70);
      ctx.closePath();
      ctx.fillStyle = "#959394";
      ctx.fill();
    }
  },
  name: "AniProgress",
  computed: {},
  watch: {
    animatePercent(value) {
      let canvas = document.getElementById("canvas-circle");
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(
        70,
        70,
        70,
        Math.PI * -0.5,
        ((Math.PI * 2) / 100) * value + Math.PI * -0.5
      );
      ctx.lineTo(70, 70);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#959394";
    },
    percent(value) {
      TweenLite.to(this.$data, 1, {
        animatePercent: value,
        ease: Power3.easeInOut
      });
    }
  },
  props: {
    loading: Boolean,
    circle: Boolean,
    percent: Number
  },
  data() {
    return {
      animatePercent: this.percent
    };
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
.ani-progress-default {
  height: 15px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
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
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.4);
}
.ani-progress-circle-loading-style:active .circle-loading-inside-style {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
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
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
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
