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
        @mouseleave="colorPickerShow = false"
      >
        <div class="ani-color-picker__panel__style"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AniColorPicker",
  data() {
    return {
      colorPickerShow: true
    };
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

.ani-color-picker__panel__style {
  position: absolute;
  width: 100%;
  height: 50%;
  background: -webkit-linear-gradient(top, transparent 23px, #444444 24px),
    -webkit-linear-gradient(left, transparent 23px, #444444 24px);
  background-size: 24px 24px;
}
</style>
