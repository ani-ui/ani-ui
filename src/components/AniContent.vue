<template>
  <div class="ani-content-style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AniContent"
};
</script>

<style scoped>
.ani-content-style {
  display: flex;
  width: 100%;
  min-height: 100px;
}
</style>
