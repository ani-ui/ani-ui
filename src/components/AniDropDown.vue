<template>
  <div class="ani-drop-down__style" @mouseenter="dropdownHide = true">
    <slot name="target"></slot>
    <transition name="fade">
      <div
        class="ani-drop-down__item"
        v-show="dropdownHide"
        @mouseleave="dropdownHide = false"
        :class="blur?'ani-dropdown-blur':'ani-dropdown-no-blur'"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AniDropDown",
  data: function() {
    return { dropdownHide: false };
  },
  props: {
    blur: Boolean
  }
};
</script>

<style scoped>
.ani-drop-down__style {
  width: auto;
  display: inline-block;
  position: relative;
}

.ani-drop-down__item {
  position: absolute;
  top: 100%;
  left: 0;
    z-index: 1;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
    .ani-dropdown-blur{
        backdrop-filter: blur(5px);
    }
    .ani-dropdown-no-blur{
        background-color: white;
    }
</style>
