<template>
  <transition :name="$parent.direction ? 'carouselR' : 'carousel'">
    <div
      ref="test"
      class="ani-carousel-item-style"
      v-if="$parent.current === index"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AniCarouselItem",
  props: {
    index: Number
  }
};
</script>

<style>
.ani-carousel-item-style {
  height: 100%;
  width: 100%;
  position: absolute;
}
.carousel-enter-active {
  transition: all 1s;
}
.carousel-leave-active {
  transition: all 1s;
}
.carousel-enter {
  transform: translateX(100%);
  opacity: 0;
}
.carousel-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.carouselR-enter-active {
  transition: all 1s;
}
.carouselR-leave-active {
  transition: all 1s;
}
.carouselR-enter {
  transform: translateX(-100%);
  opacity: 0;
}
.carouselR-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
