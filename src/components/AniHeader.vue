<template>
  <div class="ani-header-style">
    <div class="ani-header-drawer-button">
      <div class="ani-header-drawer-button-bg"></div>
      <div
        class="ani-header-button__inner"
        id="title-icon"
        @click="handleClickMenu"
      >
        <div id="menu-1" class="menu-block"></div>
        <div id="menu-2" class="menu-block"></div>
        <div id="menu-3" class="menu-block"></div>
      </div>
    </div>
    <div class="ani-header-title">
      <span>{{ title }}</span>
    </div>
    <div class="ani-header-ops">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { TweenLite, Power3 } from "gsap";
export default {
  name: "AniHeader",
  props: {
    title: String,
    link: Array,
    menuOpenedProp: Boolean,
    router: Boolean
  },
  methods: {
    handleClickMenu() {
      this.$emit("update:menuOpenedProp", !this.menuOpenedProp);
    }
  },
  watch: {
    menuOpenedProp(value) {
      if (value) {
        TweenLite.to("#menu-1", 0.5, {
          rotation: 45,
          y: 10,
          ease: Power3.easeInOut
        });
        TweenLite.to("#menu-2", 0.5, { opacity: 0, ease: Power3.easeInOut });
        TweenLite.to("#menu-3", 0.5, {
          rotation: -45,
          y: -10,
          ease: Power3.easeInOut
        });
      } else {
        TweenLite.to("#menu-1", 0.5, {
          rotation: 0,
          y: 0,
          ease: Power3.easeInOut
        });
        TweenLite.to("#menu-2", 0.5, { opacity: 1, ease: Power3.easeInOut });
        TweenLite.to("#menu-3", 0.5, {
          rotation: 0,
          y: 0,
          ease: Power3.easeInOut
        });
      }
    }
  }
};
</script>

<style>
#menu-1 {
  top: 6px;
}
#menu-2 {
  top: 16px;
}
#menu-3 {
  top: 26px;
}
.ani-header-ops {
  float: right;
  height: 64px;
}

.ani-header-drawer-button-bg {
  height: 64px;
  width: 64px;
  border-radius: 64px;
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  opacity: 0;
  transform-origin: 32px 32px;
  transform: scale(0.1);
  transition: all 500ms;
}
  .ani-header-drawer-button:hover .ani-header-drawer-button-bg{
    opacity: 1;
    transform-origin: 32px 32px;
    transform: scale(0.9);
  }
.ani-header-drawer-button:active .ani-header-drawer-button-bg{
  background-color: rgba(0,0,0,0.6);
}
</style>
