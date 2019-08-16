<template>
  <div class="ani-clock-base__style">
    <div class="ani-clock--second" ref="second"></div>
    <div class="ani-clock-minute" ref="minute"></div>
    <div class="ani-clock-hour" ref="hour"></div>
    <div class="ani-clock-mid-circle"></div>
  </div>
</template>

<script>
import { TweenLite, Power3, Linear } from "gsap";
export default {
  name: "AniClock",
  mounted() {
    TweenLite.to(this.$refs.second, 0.5, {
      rotation: this.getSecondAngle(),
      ease: Power3.easeInOut
    });
    TweenLite.to(this.$refs.minute, 0.5, {
      rotation: this.getMinuteAngle(),
      ease: Power3.easeInOut
    });
    TweenLite.to(this.$refs.hour, 0.5, {
      rotation: this.getHourAngle(),
      ease: Power3.easeInOut
    });
    this.timer = setInterval(() => {
      let temp = this.getSecondAngle();
      if (temp === 0) {
        TweenLite.to(this.$refs.second, 0.5, {
          rotation: 360,
          ease: Power3.easeInOut
        });
        TweenLite.to(this.$refs.minute, 0.5, {
          rotation: this.getMinuteAngle(),
          ease: Power3.easeInOut
        });
        if (this.getMinuteAngle() === 0) {
          TweenLite.to(this.$refs.hour, 0.5, {
            rotation: this.getHourAngle(),
            ease: Power3.easeInOut
          });
        }
        setTimeout(() => {
          TweenLite.to(this.$refs.second, 0.001, {
            rotation: 0,
            ease: Power3.easeInOut
          });
        }, 500);
      } else
        TweenLite.to(this.$refs.second, 2, {
          rotation: temp,
          ease: Linear.ease
        });
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    getSecondAngle() {
      return (new Date().getSeconds() / 60.0) * 360.0;
    },
    getMinuteAngle() {
      return (new Date().getMinutes() / 60.0) * 360.0;
    },
    getHourAngle() {
      return (new Date().getHours() / 120.0) * 360.0;
    }
  },
  data() {
    return {
      timer: null
    };
  }
};
</script>

<style lang="less">
.ani-clock-base__style {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  position: relative;
  background-color: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.ani-clock-mid-circle {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transform: translate(-50%, -50%);
}

.ani-clock--second {
  height: 65px;
  width: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: absolute;
  left: 73px;
  top: 0;
  transform-origin: 2px 75px;
}

.ani-clock-minute {
  height: 45px;
  width: 6px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  top: 20px;
  left: 72px;
  position: absolute;
  transform-origin: 3px 55px;
}

.ani-clock-hour {
  height: 25px;
  width: 8px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 1);
  top: 40px;
  left: 71px;
  position: absolute;
  transform-origin: 4px 35px;
}
</style>
