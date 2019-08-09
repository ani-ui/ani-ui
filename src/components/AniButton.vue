<template>
  <button
    @click="handleClick"
    class="ani-button-default-style"
    :class="[
      size ? 'ani-button--' + size : '',
      transparent ? 'ani-button--transparent' : '',
      {
        'is-round': round,
        'is-circle': circle,
        'is-disable': disable
      }
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AniButton",
  methods: {
    handleClick(evt) {
      if (!this.disable) this.$emit("click", evt);
    }
  },
  props: {
    size: String,
    transparent: Boolean,
    round: Boolean,
    circle: Boolean,
    disable: Boolean
  }
};
</script>

<style lang="less">
@import "../less/colorSchema";
/*
  default height:32px
  */
.ani-button-default-style {
  outline: none;
  position: relative;
  background-color: @btn-default;
  border-radius: 5px;
  color: black;
  border: none;
  height: 32px;
  transition: all 400ms;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
  display: inline-block;
  overflow-x: hidden;
  overflow-y: hidden;
}
.ani-button-default-style::after{
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  background: black;
  left: 50%;
  top: 50%;
  opacity: 0;
  transition: all 500ms;
  transform: translate(-50%,-50%)
}
.ani-button-default-style:hover::after{
opacity: 0.1;
  width:100%;
  height: 50px;
}
</style>
