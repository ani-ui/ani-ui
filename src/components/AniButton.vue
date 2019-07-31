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
        'is-disable': disable,
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
    disable: Boolean,
  },
};
</script>

<style lang="less">
@import "../less/colorSchema";
/*
  default height:32px
  */
.ani-button-default-style {
  outline: none;
  background-color: @btn-default;
  border-radius: 5px;
  color: white;
  border: none;
  height: 32px;
  transition: all 400ms;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
}
</style>
