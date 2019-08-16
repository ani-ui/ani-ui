<template>
  <div style="height: 300px;width: 100%;position: relative;">
    <svg width="0" height="0">
      <filter :id="filterUUID">
        <feTurbulence
          type="fractalNoise"
          :baseFrequency="`${testValue}`"
          numOctaves="4"
          :seed="seed"
        ></feTurbulence>
        <feDisplacementMap
          in="SourceGraphic"
          scale="100"
          in2=""
        ></feDisplacementMap>
      </filter>
      <filter :id="filterMidUUID">
        <feTurbulence
          type="fractalNoise"
          :baseFrequency="`${testValue}`"
          numOctaves="2"
          :seed="seed"
        ></feTurbulence>
        <feDisplacementMap
          in="SourceGraphic"
          scale="140"
          in2=""
        ></feDisplacementMap>
      </filter>
      <filter :id="filterFrontUUID">
        <feTurbulence
          type="fractalNoise"
          :baseFrequency="`${testValue}`"
          numOctaves="2"
          :seed="seed"
        ></feTurbulence>
        <feDisplacementMap
          in="SourceGraphic"
          scale="100"
          in2=""
        ></feDisplacementMap>
      </filter>
    </svg>
    <div class="ani-cloud-base__style" ref="cloud1"></div>
    <div class="ani-cloud-base__style" ref="cloud2"></div>
    <div class="ani-cloud-base__style" ref="cloud3"></div>
  </div>
</template>

<script>
const UUID = require('uuid/v4')
export default {
  name: "AniCloud",
  mounted() {
    this.filterUUID =  UUID();
    this.filterMidUUID =  UUID();
    this.filterFrontUUID =  UUID();
    this.$refs.cloud1.style = `filter: url(#${this.filterUUID});left: -400px;  box-shadow: 400px 400px 30px 0 #fff;`;
    this.$refs.cloud2.style = `left: -400px;  filter: url(#${this.filterMidUUID});  box-shadow: 400px 430px 60px -40px rgba(125, 125, 125, 0.5);`;
    this.$refs.cloud3.style = ` left: -400px; filter: url(#${this.filterFrontUUID});  box-shadow: 400px 470px 60px -80px rgba(0, 0, 0, 1);`;
    if (this.animation) {
      let vthis = this;
      this.timer = requestAnimationFrame(function animateCloud() {
        if (!vthis.reverseCloud) {
          vthis.testValue += 0.000003;
          if (vthis.testValue >= 0.02) vthis.reverseCloud = true;
          vthis.timer = requestAnimationFrame(animateCloud);
        } else {
          vthis.testValue = 0.01;
          vthis.reverseCloud = false;
          vthis.timer = requestAnimationFrame(animateCloud);
        }
      });
    }
  },
  beforeDestroy() {
    cancelAnimationFrame(this.timer);
  },
  data() {
    return {
      testValue: 0.01,
      reverseCloud: false,
      timer: 0,
      filterUUID: "",
      filterMidUUID: "",
      filterFrontUUID: ""
    };
  },
  props: {
    seed: {
      type: Number,
      required: true
    },
    animation: Boolean
  }
};
</script>

<style>
.ani-cloud-base__style {
  height: 180px;
  width: 100%;
  background: transparent;
  border-radius: 50%;
  position: absolute;
  top: -400px;
}
</style>
