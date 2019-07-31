<template>
  <transition name="fade-small">
    <div
      class="ani-back-top-style"
      v-show="showBackTopButton"
      @click="handleClickTop"
    >
      UP
    </div>
  </transition>
</template>

<script>
import { TweenLite, Power3 } from "gsap";
export default {
  name: "AniBackTop",
  mounted() {
    let vthis = this;
    window.onscroll = function() {
      vthis.showBackTopButton = window.scrollY >= 300;
    };
  },
  data() {
    return {
      showBackTopButton: false,
      scrollPosition: 0,
      scrollControl: 0
    };
  },
  watch: {
    scrollControl(value) {
      window.scrollTo(0, value);
    }
  },
  methods: {
    handleClickTop() {
      this.scrollControl = window.scrollY;
      TweenLite.to(this.$data, 1, { scrollControl: 0,ease:Power3.easeInOut });
    }
  }
};
</script>

<style scoped>
.ani-back-top-style {
  position: fixed;
  bottom: 16px;
  right: 16px;
  height: 48px;
  width: 48px;
  background-color: white;
  z-index: 10;
  border-radius: 48px;
  line-height: 48px;
  text-align: center;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.4);
  transition: all 500ms;
}
.ani-back-top-style:hover {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.2);
}
.ani-back-top-style:active {
  box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.4);
}
.fade-small-enter-active,
.fade-small-leave-active {
  transition: all 0.5s;
}
.fade-small-enter, .fade-small-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0.1);
}
</style>
