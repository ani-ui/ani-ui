<template>
  <div class="ani-weather__base_style">
    <div
      :class="[
        this.sunny ? 'ani-weather--sunny' : '',
        this.cloud ? 'ani-weather--cloudy' : '',
        this.topCloud ? 'ani-weather--top-cloud' : ''
      ]"
    ></div>
    <div
      :class="[
        this.rain ? 'ani-weather--rain' : '',
        this.snow ? 'ani-weather--snow' : '',
        this.hail ? 'ani-weather--hail' : ''
      ]"
      :style="`animation: ${speed?speed:1}s animate-rain infinite linear`"
    ></div>
    <div v-if="lightning" class="ani-cloud-lightning">
      <svg
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
      >
        <path
          d="M434.897971 962.214818c-2.485611 0-4.357238-0.661056-5.599532-1.871627-8.714476-2.52552-11.821233-7.463995-9.335622-14.935154l57.877175-341.637937L225.804792 603.7701c-6.220678 0-10.577916-2.492774-13.071713-7.471159-3.727904-4.938476-3.106758-10.538007 1.871627-16.799618L602.920756 71.702042c4.978385-7.471159 10.577916-8.674567 16.799618-3.736091 6.220678 1.242294 9.335622 6.260587 9.335622 14.935154l-57.877175 341.646124L793.34269 424.547229c6.220678 0 10.577916 2.52552 13.071713 7.463995 1.242294 4.978385 1.242294 10.577916 0 16.806781L447.969685 956.615287C444.233594 960.343191 439.876356 962.214818 434.897971 962.214818z"
          fill="#f4ea2a"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "AniWeather",
  props: {
    type: String,
    lightning: Boolean,
    speed:Number,
  },
  watch: {
    type(value) {
      this.rain = value.includes("rain");
      this.hail = value.includes("hail");
      this.snow = value.includes("snow");
      this.sunny = value.includes("sunny");
      this.cloud =
        value.includes("cloudy") ||
        value.includes("rain") ||
        value.includes("hail") ||
        value.includes("snow");
      this.topCloud =
        value.includes("rain") ||
        value.includes("hail") ||
        value.includes("snow");
    }
  },
  data() {
    return {
      error: false,
      sunny: false,
      rain: false,
      snow: false,
      cloud: false,
      topCloud: false,
      hail: false
    };
  },
  mounted() {
    this.rain = this.type.includes("rain");
    this.hail = this.type.includes("hail");
    this.snow = this.type.includes("snow");
    this.sunny = this.type.includes("sunny");
    this.cloud =
      this.type.includes("cloudy") ||
      this.type.includes("rain") ||
      this.type.includes("hail") ||
      this.type.includes("snow");
    this.topCloud =
      this.type.includes("rain") ||
      this.type.includes("hail") ||
      this.type.includes("snow");
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
}
.ani-weather--snow {
  position: absolute;
  height: 10px;
  width: 10px;
  top: 35px;
  left: 26px;
  border-radius: 10px;
  background-color: white;
  animation: 2s animate-rain infinite linear;
}
.ani-weather--hail {
  position: absolute;
  height: 10px;
  width: 10px;
  top: 35px;
  left: 26px;
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

.ani-cloud-lightning {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation:3s animate-lightning infinite ;
}
@keyframes animate-lightning {
  from{
    opacity: 1;
  }
  20%{
    opacity: 1;
    transform:translate(-50%, -50%) translateY(10px);
  }
  40%{
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}
</style>
