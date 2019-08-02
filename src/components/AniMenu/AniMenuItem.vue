<template>
  <a :href="link" v-if="!direct.router">
    <div
      class="ani-menu-item-base-style"
      :class="[
        direct.direction
          ? 'ani-menu-item-style__' + direct.direction
          : 'ani-menu-item-style__vertical',
        direct.divider ? 'ani-menu-divider' : ''
      ]"
      :style="
        `height:${direct.height ? direct.height : 40}px;line-height:${
          direct.height ? direct.height : 40
        }px`
      "
    >
      <div style="margin-left: 32px">
        <slot></slot>
      </div>
    </div>
  </a>
  <div v-else>
    <div
      @click="handleClick"
      class="ani-menu-item-base-style"
      :class="[
        direct.direction
          ? 'ani-menu-item-style__' + direct.direction
          : 'ani-menu-item-style__vertical',
        direct.divider ? 'ani-menu-divider' : ''
      ]"

      :style="
        `height:${direct.height ? direct.height : 40}px;line-height:${
          direct.height ? direct.height : 40
        }px`
      "
    >
      <div style="margin-left: 32px">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AniMenuItem",
  inject: ["direct"], //to get direction(exp:this.direct.direction & this.direct.router)
  props: {
    link: String
  },
  methods: {
    handleClick() {
      this.$router.push({ name: this.link });
    }
  }
};
</script>

<style scoped>
.ani-menu-item-style__vertical {
  width: 100%;
}
.ani-menu-item-style__horizontal {
  height: 100%;
  width: 100px;
  line-height: 100%;
}
.ani-menu-item-base-style {
  display: inline-block;
  transition: all 500ms;
}
.ani-menu-item-base-style:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.ani-menu-item-base-style:active {
  background-color: rgba(0, 0, 0, 0.5);
}
.ani-menu-divider {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
