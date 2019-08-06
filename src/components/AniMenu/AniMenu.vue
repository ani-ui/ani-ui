<template>
  <div class="ani-menu-style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AniMenu",
  props: {
    direction: String, // vertical && horizontal
    router: Boolean,
    divider: Boolean,
    height: Number
  },
  provide() {
    return {
      direct: this
    };
  }
};
</script>

<style>
.ani-menu-style {
  width: 100%;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
