<template>
  <div class="ani-color-picker_parent__style">
    <div
      class="ani-color-picker-block__style"
      :style="`background-color:${defaultColor}`"
      @click="colorPickerShow = true"
    ></div>
    <transition name="slide-bottom">
      <div
        v-if="colorPickerShow"
        class="ani-color-picker-body__style"
        @mouseleave="colorPickerShow = false"
      >
        <div class="ani-color-picker__panel_bg__style"></div>
        <div
          class="ani-color-picker__panel__style"
          :style="
            `background-color: rgba(${red},${green},${blue},${transparent /
              100.0});`
          "
        ></div>
        <div style="position: absolute;top: 50%;width: 100%">
          <div class="ani-color-picker-color__style">
            <label>
              <input
                class="ani-color-picker-base__style"
                type="range"
                v-model="red"
                max="255"
              />
            </label>
          </div>
          <div class="ani-color-picker-color__style">
            <label>
              <input
                class="ani-color-picker-base__style"
                type="range"
                v-model="green"
                max="255"
              />
            </label>
          </div>
          <div class="ani-color-picker-color__style">
            <label>
              <input
                class="ani-color-picker-base__style"
                type="range"
                v-model="blue"
                max="255"
              />
            </label>
          </div>
          <div class="ani-color-picker-color__style">
            <label>
              <input
                class="ani-color-picker-base__style"
                type="range"
                v-model="transparent"
                max="100"
              />
            </label>
          </div>
        </div>
        <div class="ani-color-picker-bottom-op_style">
          <div class="ani-color-picker-bottom-op-button" @click="colorPickerShow=false">取消</div>
          <div class="ani-color-picker-bottom-op-button" @click="handleClickConfirm">确认</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AniColorPicker",
  data() {
    return {
      colorPickerShow: false,
      red: 0,
      green: 0,
      blue: 0,
      transparent: 100.0,
      temp: ""
    };
  },
  props: {
    defaultColor: {
      type: String,
      required: true
    }
  },
  computed: {
    colors() {
      return this.defaultColor
        .toString()
        .split(/[()]/)[1]
        .split(",");
    }
  },
  mounted() {
    let temp = [];
    temp = this.colors;
    this.red = temp[0];
    this.green = temp[1];
    this.blue = temp[2];
    this.transparent = temp[3]*100;
  },
    methods: {
        handleClickConfirm() {
            this.$emit('update:default-color',`rgba(${this.red},${this.green},${this.blue},${this.transparent/100.0})`)
            this.colorPickerShow=false
        }
    }
};
</script>

<style lang="less">
.ani-color-picker-block__style {
  width: 35px;
  height: 35px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: all 500ms;
}
.ani-color-picker-block__style:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}
.ani-color-picker-block__style:active {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
}

.ani-color-picker-body__style {
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
    z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.ani-color-picker__panel_bg__style {
  position: absolute;
  width: 100%;
  height: 50%;
  background: -webkit-linear-gradient(top, transparent 23px, #444444 24px),
    -webkit-linear-gradient(left, transparent 23px, #444444 24px);
  background-size: 24px 24px;
}

.ani-color-picker__panel__style {
  position: absolute;
  width: 100%;
  height: 50%;
}

.ani-color-picker-base__style {
  appearance: none;
  width: 100%;
  outline: none;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  height: 10px;
}
.ani-color-picker-base__style::-webkit-slider-thumb {
  appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.ani-color-picker-color__style {
  width: 100%;
}

.ani-color-picker-bottom-op_style {
  height: 25px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.ani-color-picker-bottom-op-button {
  height: 25px;
  width: 50%;
  background-color: white;
  display: inline-block;
  text-align: center;
  line-height: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 500ms;
  user-select: none;
}
.ani-color-picker-bottom-op-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.ani-color-picker-bottom-op-button:active {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
}

.ani-color-picker_parent__style {
    position: relative;
}
.slide-bottom-enter-active {
    transition: all .5s;
}
.slide-bottom-leave-active {
    transition: all 1s;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
    transform: scale(0.01);
    transform-origin: 0 0;
    opacity: 0;
}
</style>
