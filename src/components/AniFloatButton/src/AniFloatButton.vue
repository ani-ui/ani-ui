<template>
  <div id="ani-float-button" class="ani-float-button-main-style">
    <i class="material-icons icon-position">add</i>
  </div>
</template>

<script>
export default {
  name: "AniFloatButton"
};
</script>

<style scoped>
.icon-position {
  position: absolute;
  top: 12px;
  left: 12px;
}
.ani-float-button-main-style {
  position: fixed;
  bottom: 20px;
  height: 48px;
  border-radius: 48px;
  width: 48px;
  right: 20px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.4);
  transition: all 500ms;
}
.ani-float-button-main-style:hover {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.2);
}
.ani-float-button-main-style:active {
  box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
}
</style>
