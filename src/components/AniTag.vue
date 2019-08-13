<template>
  <div
    :class="[removable ? 'ani-tag-base-remove__style' : 'ani-tag-base__style']"
  >
    <span :class="[removable ? 'ani-tag-span__style' : '']">{{ tag }}</span>
      <div v-if="removable" class="ani-tag-remove-mark__style">
          <div class="ani-tag-close-icon__style close-tag-left"></div>
          <div class="ani-tag-close-icon__style close-tag-right"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "AniTag",
  props: {
    tag: String,
    removable: Boolean
  }
};
</script>

<style scoped>
.ani-tag-base__style {
  height: 20px;
  min-width: 40px;
  display: inline-block;
  padding: 4px 8px;
  line-height: 20px;
  border-radius: 5px;
  transition: all 500ms;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.ani-tag-base__style:hover,
.ani-tag-base-remove__style:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.ani-tag-base__style:active,
.ani-tag-base-remove__style:active {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
}
.ani-tag-base-remove__style {
  height: 20px;
  min-width: 40px;
  display: inline-block;
  padding: 4px 0;
  line-height: 20px;
  border-radius: 5px;
  transition: all 500ms;
  border: 1px solid rgba(0, 0, 0, 0.2);
    position: relative;
}

.ani-tag-span__style {
  padding-right: 18px;
  padding-left: 18px;
  transition: all 500ms;
}
.ani-tag-base-remove__style:hover .ani-tag-span__style {
  padding-right: 27px;
  padding-left: 9px;
}

.ani-tag-remove-mark__style {
    height: 18px;
    width: 18px;
    position: absolute;
    right: 18px;
    top: 4px;
    border-radius: 16px;
    opacity: 0;
    transition: all 500ms;
}
.ani-tag-base-remove__style:hover .ani-tag-remove-mark__style{
    right: 6px;
    opacity: 1;
}
.ani-tag-remove-mark__style:hover{
    background-color: rgba(0,0,0,0.3);
}
.ani-tag-remove-mark__style:active{
    background-color: rgba(0,0,0,0.5);
}
.ani-tag-remove-mark__style:active .ani-tag-close-icon__style{
    background-color: rgba(255,255,255,1);
}
.ani-tag-close-icon__style {
    width: 14px;
    height: 2px;
    transition: all 500ms;
    position: absolute;
    background-color: rgba(0,0,0,0.6);
    top: 3px;
}

.close-tag-left {
    left: 5px;
    transform-origin: 0 0;
    transform: rotate(45deg);
}
.close-tag-right {
    right: 5px;
    transform-origin: 14px 0;
    transform: rotate(-45deg);
}
</style>
