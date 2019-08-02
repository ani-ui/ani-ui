<template>
  <div class="ani-card-style">
    <div class="ani-card-header" v-if="titleIsDisplay||title">
      {{ title }}
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AniCard",
  props:{
    title:String
  },
  data(){
    return {
      titleIsDisplay:false,
    }
  },
  mounted() {
    this.titleIsDisplay = typeof (this.$slots.title) !== 'undefined';
  }
}
</script>

<style scoped>
.ani-card-style {
  padding: 10px;
  height: 100%;
  width: 100%;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}

.ani-card-header {
  width: 100%;
  height: 32px;
  line-height: 32px;
  padding: 5px 0;
}
</style>
