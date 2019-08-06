<template>
  <transition name="fade-small">
    <div
      class="ani-back-top-style"
      v-show="showBackTopButton"
      @click="handleClickTop"
      :style="`right:${right}px`"
      id="ani-back-top"
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
    setInterval(() => {
      this.hasFloatButton =
        document.getElementById("ani-float-button") !== null;
    }, 1000);
    if (!this.target) {
      window.onscroll = () => {
        this.showBackTopButton = window.scrollY >= 300;
      };
    } else {
      document.getElementById(this.target).onscroll = () => {
        this.showBackTopButton =
          document.getElementById(this.target).scrollTop >= 300;
      };
    }
  },
  data() {
    return {
      showBackTopButton: false,
      scrollPosition: 0,
      scrollControl: 0,
      right: 20,
      hasFloatButton: false
    };
  },
  props: {
    target: String
  },
  watch: {
    scrollControl(value) {
      if (!this.target) {
        window.scrollTo(0, value);
      } else document.getElementById(this.target).scrollTo(0, value);
    },
    hasFloatButton(value) {
      window.console.log(value);
      if (value) {
        TweenLite.to("#ani-back-top", 0.5, { x: -68, ease: Power3.easeInOut });
      } else
        TweenLite.to("#ani-back-top", 0.5, { x: 0, ease: Power3.easeInOut });
    }
  },
  methods: {
    handleClickTop() {
      if (!this.target) {
        this.scrollControl = window.scrollY;
      } else
        this.scrollControl = document.getElementById(this.target).scrollTop;
      TweenLite.to(this.$data, 1, { scrollControl: 0, ease: Power3.easeInOut });
    }
  }
};
</script>

<style scoped>
.ani-back-top-style {
  position: fixed;
  bottom: 20px;
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
  border-radius: 15px;
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
