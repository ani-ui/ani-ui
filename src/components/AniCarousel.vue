<template>
  <div
    class="ani-carousel-main__style"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <transition name="fade">
      <div
        v-if="showArrows"
        class="ani-carousel-arrow ani-carousel-arrow-left"
        @click="handleClickArrowLeft"
      >
        <i class="material-icons">
          keyboard_arrow_left
        </i>
      </div>
    </transition>
    <transition name="fade">
      <div
        v-if="showArrows"
        class="ani-carousel-arrow ani-carousel-arrow-right"
        @click="handleClickArrowRight"
      >
        <i class="material-icons">
          keyboard_arrow_right
        </i>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showArrows" class="ani-carousel-bottom-lint">
        <div
          v-for="item in items.length"
          :key="`item-ani-carousel-${item}`"
          :class="[
            current === item - 1
              ? 'ani-carousel-bottom-lint-item-select'
              : 'ani-carousel-bottom-lint-item'
          ]"
          @click="handleClickBottomLint(item)"
        ></div>
      </div>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AniCarousel",
  methods: {
    updateItem() {
      this.items = this.$children.filter(
        child => child.$options.name === "AniCarouselItem"
      );
    },
    handleClickArrowLeft() {
      window.console.log(this.current);
      this.direction = true;
      setTimeout(() => {
        if (this.current === 0)
          this.$emit("update:current", this.items.length - 1);
        else this.$emit("update:current", this.current - 1);
      }, 10);
    },
    handleClickArrowRight() {
      this.direction = false;
      setTimeout(() => {
        if (this.items.length === this.current + 1)
          this.$emit("update:current", 0);
        else this.$emit("update:current", this.current + 1);
      }, 10);
    },
    handleMouseEnter() {
      this.showArrows = true;
      this.handleStop();
    },
    handleMouseLeave() {
      this.showArrows = false;
      this.handleAutoPlay();
    },
    handleAutoPlay() {
      this.timer = setInterval(() => {
        if (this.items.length === this.current + 1)
          this.$emit("update:current", 0);
        else this.$emit("update:current", this.current + 1);
      }, 3000);
    },
    handleStop() {
      clearInterval(this.timer);
    },
    handleClickBottomLint(item) {
      this.direction = item - 1 < this.current;
      setTimeout(() => {
        this.$emit("update:current", item - 1);
      }, 10);
    }
  },
  props: {
    current: Number
  },
  data() {
    return {
      items: [],
      direction: false,
      showArrows: false,
      timer: null
    };
  },
  mounted() {
    this.updateItem();
    this.handleAutoPlay();
  },
  beforeDestroy() {
    this.handleStop()
  }
};
</script>

<style scoped>
.ani-carousel-main__style {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.ani-carousel-arrow {
  position: absolute;
  left: 0;
  user-select: none;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 40px;
  background-color: transparent;
  top: 45%;
  transition: all 500ms;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
}
.ani-carousel-arrow:hover {
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.ani-carousel-arrow:active {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  color: white;
}

.ani-carousel-arrow-left {
  left: 0;
}
.ani-carousel-arrow-right {
  left: calc(100% - 40px);
}

.ani-carousel-bottom-lint {
  display: flex;
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  z-index: 10;
}

.ani-carousel-bottom-lint-item {
  height: 10px;
  width: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  flex: 1;
  transform: scaleY(1);
  transform-origin: 0 10px;
  transition: all 500ms;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.ani-carousel-bottom-lint-item-select {
  height: 10px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  flex: 1;
  transform: scaleY(1);
  transform-origin: 0 10px;
  transition: all 500ms;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
.ani-carousel-bottom-lint-item:hover {
  transform: scaleY(2);
  background-color: rgba(255, 255, 255, 0.5);
  transform-origin: 0 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}
.ani-carousel-bottom-lint-item-select:hover {
  transform: scaleY(2);
  transform-origin: 0 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}
</style>
