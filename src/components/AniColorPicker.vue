<template>
  <div class="ani-color-picker_parent__style">
    <div
      class="ani-color-picker-block__style"
      @click="colorPickerShow = true"
    ></div>
    <transition name="slide-bottom">
      <div
        v-if="colorPickerShow"
        class="ani-color-picker-body__style"
        @mouseleave="colorPickerShow = true"
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
              <div class="ani-color-picker-bottom-op-button">取消</div>
              <div class="ani-color-picker-bottom-op-button">确认</div>
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
      colorPickerShow: true,
      red: 0,
      green: 0,
      blue: 0,
      transparent: 100.0
    };
  },
    props:{
      default:String,
    },
    mounted() {
      let temp=this.default.toString()
        temp.s
  }
};
</script>

<style lang="less">
.ani-color-picker-block__style {
  width: 35px;
  height: 35px;
  background-color: transparent;
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.ani-color-picker_parent__style {
  position: relative;
}
.slide-bottom-enter-active {
  transition: all 1s;
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
.ani-color-picker-base__style::-webkit-slider-thumb{
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background-color:white;
    box-shadow:0 0 10px rgba(0,0,0,0.3);
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
    border-top: 1px solid rgba(0,0,0,0.2);
    transition: all 500ms;
    user-select: none;
}
.ani-color-picker-bottom-op-button:hover{
    background-color: rgba(0,0,0,0.2);
}
.ani-color-picker-bottom-op-button:active{
    background-color: rgba(0,0,0,0.6);
    color: white;
}
</style>
