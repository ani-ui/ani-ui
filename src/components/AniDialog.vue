<template>
  <transition name="fade">
    <div>
      <transition name="fade">
        <div
                v-if="visible"
          class="ani-dialog-style--main"
          :style="`backdrop-filter: blur(${blur ? blur : 0}px);`"
          @click="handleDialogClose"
        ></div>
      </transition>
      <transition name="fade">
        <div class="ani-dialog-card-style" v-if="visible">
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AniDialog",
  props: {
    blur: Number,
    visible: Boolean
  },
  methods: {
    handleDialogClose() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style scoped>
.ani-dialog-style--main {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
}

.ani-dialog-card-style {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
  background-color: white;
  border-radius: 15px;
  z-index: 15;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transition: all 500ms;
}

.ani-dialog-card-style:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}
.ani-dialog-card-style:active {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>
