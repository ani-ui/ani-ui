<template>
  <div class="ani-slider-main__style" :id="customID">
    <div
      class="ani-slider-the-slider__style"
      :style="`left:${realLeft}%;`"
      @mousedown="handleMouseDown"
    >
      <div class="ani-slider-the-slider__inner__style"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AniSlider",
  data() {
    return {
      customID: "",
      left: 0,
      initLeft: 0,
      initLock: false,
      parentWidth: 0
    };
  },
  model: {
    prop: "value",
    event: "changeValue"
  },
  computed: {
    realLeft() {
      let temp = (this.left / this.parentWidth) * 100;
      this.$emit("changeValue", temp);
      window.console.warn(temp.toFixed(0))
      return temp;
    }
  },
  methods: {
    handleMouseMove(e) {
      let temp = e.clientX - this.initLeft;
      console.log(temp)
      window.console.log(this.initLeft)
      if (temp > 0 && temp < this.parentWidth) {
        this.left = temp;
      }
    },
    handleMouseDown(e) {
      e.preventDefault();
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseUp() {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }
  },
  mounted() {
    let vthis = this;
    async function getID() {
      vthis.customID = await (Math.random()
        .toFixed(5)
        .toString() +
        Date.now().toString() +
        "slider");
    }
    getID().then(() => {
      vthis.parentWidth = document.getElementById(this.customID).offsetWidth;
      vthis.initLeft = document.getElementById(this.customID).offsetLeft + 7;
    });
    window.onresize = () => {
      this.parentWidth = document.getElementById(this.customID).offsetWidth;
      this.initLeft = document.getElementById(this.customID).offsetLeft + 7;
    };
  }
};
</script>

<style scoped>
.ani-slider-main__style {
  width: auto;
  height: 8px;
  margin: 0 10px;
  position: relative;
  background-color: white;
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}

.ani-slider-the-slider__style {
  height: 15px;
  width: 15px;
  position: absolute;
  top: 50%;
  transform: translate(-7px, -50%);
}

.ani-slider-the-slider__inner__style {
  height: 15px;
  width: 15px;
  position: absolute;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 500ms;
}
.ani-slider-the-slider__inner__style:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
}
.ani-slider-the-slider__inner__style:active {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
}
</style>
