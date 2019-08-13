<template>
  <transition name="fade">
    <div>
      <transition name="fade">
        <div
                v-if="visible"
          class="ani-dialog-style--main"
          :style="`backdrop-filter: blur(${blur ? blur : 0}px);`"
          @click="handleDialogClose"
        ></div>
      </transition>
      <transition name="fade">
        <div class="ani-dialog-card-style" v-if="visible">
            <div class="ani-dialog-header--style">
                <span style="padding-left: 20px">{{ title }}</span>
                <div class="ani-dialog-close" @click="handleClickClose">
                    <div class="ani-dialog-close__icon1"></div>
                    <div class="ani-dialog-close__icon2"></div>
                </div>
            </div>
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AniDialog",
  props: {
    blur: Number,
    visible: Boolean,
      title:String
  },
  methods: {
    handleDialogClose() {
      this.$emit("update:visible", false);
    },
      handleClickClose() {
          this.$emit("update:visible", false);
      }
  }
};
</script>

<style lang="less">
    @import "../less/main";
.ani-dialog-style--main {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: @dialogMaskZIndex;
  background-color: rgba(0, 0, 0, 0.2);
}

.ani-dialog-card-style {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
  background-color: white;
  border-radius: 15px;
  z-index: @dialogZIndex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transition: all 500ms;
}

.ani-dialog-card-style:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}
.ani-dialog-card-style:active {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.ani-dialog-header--style {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    width: 100%;
    position: relative;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}

.ani-dialog-close {
    height: 20px;
    width: 20px;
    right: 16px;
    top: 10px;
    position: absolute;
    transition: all 500ms;
}
.ani-dialog-close:hover {
    transform: rotate(180deg);
}

.ani-dialog-close__icon1 {
    height: 3px;
    width: 20px;
    transform: rotate(45deg);
    background-color: #333333;
    position: absolute;
    top: 9px;
}
.ani-dialog-close__icon2 {
    height: 3px;
    width: 20px;
    top: 9px;
    transform: rotate(-45deg);
    background-color: #333333;
    position: absolute;
}
</style>
