<template>
  <div class="ani-header-style">
    <div class="ani-header-drawer-button">
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
      <a
        :href="item.href"
        v-for="item in link"
        :key="item.name"
        class="ani-header-link"
      >
        <div class="ani-header-button">
          {{ item.name }}
        </div>
      </a>
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
    menuOpenedProp:Boolean
  },
  methods: {
    handleClickMenu() {

      this.$emit("update:menuOpenedProp",!this.menuOpenedProp)
    }
  },
  watch:{
    menuOpenedProp(value){
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
</style>
