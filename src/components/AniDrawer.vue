<template>
  <div>
    <transition
      :name="direction ? 'slide-fade-' + direction : 'slide-fade-left'"
    >
      <div
        :style="`height:${innerHeight}px`"
        class="ani-drawer-style"
        :class="[
          direction
            ? 'ani-drawer-direction--' + direction
            : 'ani-drawer-direction--left'
        ]"
        v-show="drawerOpen"
      >
        <div class="ani-drawer-close" @click="handleClickClose">
          <div class="ani-drawer-close__icon1"></div>
          <div class="ani-drawer-close__icon2"></div>
        </div>
        <slot></slot>
      </div>
    </transition>
    <transition name="fade">
      <div
        v-show="drawerOpen"
        class="ani-drawer-cap"
        :style="
          `height:${innerHeight}px;width:${innerWidth}px;${blur ? blured : ''}`
        "
        @click="handleClickClose"
      ></div>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;

    window.onresize = ()=> {
      this.innerHeight = window.innerHeight;
      this.innerWidth = window.innerWidth;
    };
  },
  name: "AniDrawer",
  data() {
    return {
      innerHeight: 100,
      innerWidth: 100,
      drawerNotClosed: true
    };
  },
  computed: {
    blured() {
      return `backdrop-filter: blur(${this.radius ? this.radius : "5"}px);`;
    }
  },
  props: {
    drawerOpen: Boolean,
    blur: Boolean,
    direction: String, // default left
    radius: Number
  },
  methods: {
    handleClickClose() {
      this.$emit("update:drawerOpen", false);
    }
  }
};
</script>

<style>
.slide-fade-left-enter-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-left-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-left-enter, .slide-fade-left-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-300px);
}
.slide-fade-right-enter-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-right-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-right-enter, .slide-fade-right-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(300px);
}
.slide-fade-top-enter-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-top-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-top-enter, .slide-fade-top-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-300px);
}
.slide-fade-bottom-enter-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-bottom-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-bottom-enter, .slide-fade-bottom-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(300px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.ani-drawer-cap {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
  left: 0;
  top: 0;
}
</style>
