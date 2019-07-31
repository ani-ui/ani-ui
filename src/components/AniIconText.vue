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
  font-size: 20px;
  line-height: 28px;
  vertical-align:middle;
  height: 28px;
  position: absolute;
  opacity: 0;
  transform: translateX(10px);
  transition: all 500ms;
}
.text-icon--text {
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 8px;
  vertical-align:middle;
  height: 28px;
  padding-left: 13px;
  padding-right: 13px;
  transition: all 500ms;
}

.ani-icon-text-style:hover .text-icon--text {
  padding-left: 26px;
  padding-right: 0;
}
  .ani-icon-text-style:hover .text-icon--icon{
    opacity: 1;
    transform: translateX(0);
  }
</style>
