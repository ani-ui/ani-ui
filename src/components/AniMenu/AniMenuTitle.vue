<template>
  <div
    class="ani-menu-item-title-style"
    :class="[direct.divider ? 'ani-menu-title-divider' : '']"
  >
    <span class="ani-menu-title-span__style">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "AniMenuTitle",
  props: {
    title: String
  },
  inject: ["direct"]
};
</script>

<style>
.ani-menu-item-title-style {
  display: inline-block;
  transition: all 500ms;
  height: 50px;
  line-height: 50px;
  width: 100%;
}
.ani-menu-title-divider {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.ani-menu-title-span__style {
 padding-left: 16px;
  font-size: 20px;
  transition: all 500ms;
  user-select: none;
}
.ani-menu-item-title-style:hover .ani-menu-title-span__style{
  padding-left: 32px;
}
</style>
