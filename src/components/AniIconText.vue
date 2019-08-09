<template>
  <div class="ani-icon-text-style">
    <span class="text-icon--icon">
      <slot name="icon"></slot>
    </span>
    <span class="text-icon--text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "AniIconText"
};
</script>

<style>
.text-icon--icon {
  z-index: 1;
  font-size: 20px;
  line-height: 28px;
  vertical-align: middle;
  height: 28px;
  opacity: 0;
  position: absolute;
  transform: translateX(10px);
  transition: opacity 500ms, transform 500ms;
}
.text-icon--text {
  z-index: 1;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 8px;
  vertical-align: middle;
  height: 28px;
  padding-left: 13px;
  padding-right: 13px;
  transition: padding-left 500ms, padding-right 500ms;
}
.ani-icon-text-style {
  z-index: 1;
  position: relative;
}
.ani-icon-text-style:hover .text-icon--text {
  padding-left: 26px;
  padding-right: 0;
}
.ani-icon-text-style:hover .text-icon--icon {
  opacity: 1;
  transform: translateX(0);
}
</style>
