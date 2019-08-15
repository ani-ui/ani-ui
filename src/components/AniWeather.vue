<template>
  <div class="ani-weather__base_style">
    <div
      :class="[
        this.sunny ? 'ani-weather--sunny' : '',
        this.cloud ? 'ani-weather--cloudy' : '',
        this.topCloud ? 'ani-weather--top-cloud' : ''
      ]"
    ></div>
    <div :class="[
    this.rain ? 'ani-weather--rain' : '',
    this.snow?'ani-weather--snow':'',
    ]"></div>
  </div>
</template>

<script>
export default {
  name: "AniWeather",
  props: {
    type: String
  },
  watch: {
    type(value) {
      switch (value) {
        case "sunny":
          this.sunny = true;
          break;
        case "cloudy":
          this.cloud = true;
          break;
        case "rain":
          this.rain = true;
          this.cloud = true;
          this.topCloud = true;
          break;
        case "snow":
          this.snow = true;
          this.cloud = true;
          this.topCloud = true;
          break;
      }
    }
  },
  data() {
    return {
      sunny: false,
      rain: false,
      snow: false,
      cloud: false,
      topCloud: false
    };
  },
  mounted() {
    switch (this.type) {
      case "sunny":
        this.sunny = true;
        break;
      case "cloudy":
        this.cloud = true;
        break;
      case "rain":
        this.rain = true;
        this.cloud = true;
        this.topCloud = true;
        break;
      case "snow":
        this.snow = true;
        this.cloud = true;
        this.topCloud = true;
        break;
    }
  }
};
</script>

<style lang="less">
.ani-weather__base_style {
  height: 110px;
  width: 110px;
  display: inline-block;
  position: relative;
}

/* 110*110 pixel */
.ani-weather--cloudy {
  height: 40px;
  width: 40px;
  border-radius: 40px;
  transform: translate(-50%, 30px);
  box-shadow: 0 0 0 5px white, -25px 3px white, 25px 3px white,
    -13px -10px white, 13px -10px white;
  background-color: white;
  animation: 2s animate-cloudy infinite;
  position: absolute;
  left: 50%;
}
.ani-weather--top-cloud {
  transform: translate(-50%, 5px);
  animation: 2s animate-cloudy-top infinite;
}
.ani-weather--sunny {
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50px;
  box-shadow: 0 0 30px rgba(255, 235, 71, 0.8);
  background-color: #ffeb47;
  transform: translate(-50%, -50%);
  animation: 4s animate-sunny infinite;
}
.ani-weather--rain {
  position: absolute;
  height: 15px;
  width: 4px;
  top: 35px;
  left: 28px;
  border-radius: 4px;
  background-color: white;
  animation: 2s animate-rain infinite linear;
}
.ani-weather--snow{
    position: absolute;
    height: 10px;
    width: 10px;
    top: 35px;
    left: 26px;
    border-radius: 10px;
    background-color: white;
    animation: 2s animate-rain infinite linear;
}
@keyframes animate-rain {
  from {
    transform: translateY(0);
    box-shadow: 0 20px white, 0 40px white, 25px -5px white, 25px 15px white,
      25px 35px white, 50px 0 white, 50px 20px white, 50px 40px white;
  }
  to {
    transform: translateY(20px);
    box-shadow: 0 20px white, 0 40px transparent, 25px -5px white,
      25px 15px white, 25px 35px transparent, 50px 0 white, 50px 20px white,
      50px 40px transparent;
  }
}
@keyframes animate-sunny {
  from,
  to {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(0.9);
  }
}
@keyframes animate-cloudy {
  from,
  to {
    transform: translate(-50%, 30px);
  }
  50% {
    transform: translate(-50%, 36px);
  }
}
@keyframes animate-cloudy-top {
  from,
  to {
    transform: translate(-50%, 25px);
  }
  50% {
    transform: translate(-50%, 11px);
  }
}
</style>
