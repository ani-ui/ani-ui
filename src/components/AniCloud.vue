<template>
  <div style="height: 300px;width: 100%;position: relative;">
    <svg width="0" height="0">
      <filter id="filter">
        <feTurbulence
          id="test"
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
      <filter id="filter-mid">
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
      <filter id="filter-front">
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
    <div class="ani-cloud-base__style" id="cloud-1"></div>
    <div class="ani-cloud-base__style" id="cloud-2"></div>
    <div class="ani-cloud-base__style" id="cloud-3"></div>
  </div>
</template>

<script>
export default {
  name: "AniCloud",
  mounted() {
    if (this.animation) {
      this.timer = setInterval(() => {
        if (!this.reverseCloud) {
          this.testValue += 0.000003;
          if (this.testValue >= 0.02) this.reverseCloud = true;
        } else {
          this.testValue = 0.01;
          this.reverseCloud = false;
        }
      }, 20);
    }
  },
    beforeDestroy(){
      clearInterval(this.timer)
    },
  data() {
    return {
      testValue: 0.01,
      reverseCloud: false,
      timer: null
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
#cloud-1 {
  filter: url(#filter);
  left: -400px;
  box-shadow: 400px 400px 30px 0 #fff;
}
#cloud-2 {
  left: -400px;
  filter: url(#filter-mid);
  box-shadow: 400px 430px 60px -40px rgba(125, 125, 125, 0.5);
}

#cloud-3 {
  left: -400px;
  filter: url(#filter-front);
  box-shadow: 400px 470px 60px -80px rgba(0, 0, 0, 1);
}
</style>
