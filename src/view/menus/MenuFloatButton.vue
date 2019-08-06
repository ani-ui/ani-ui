<template>
  <div style="width: 90%">
    <h1>ani-float-button 浮动按钮</h1>
    <card-code-display title="基础使用">
      <ani-float-button></ani-float-button>
    </card-code-display>
    <div style="height:2000px"></div>
  </div>
</template>

<script>
import AniFloatButton from "../../components/AniFloatButton/index";
import mountMixin from "../component/mixin";
import CardCodeDisplay from "../component/CardCodeDisplay";
export default {
  name: "MenuFloatButton",
  components: {
    CardCodeDisplay,
    AniFloatButton
  },
  mixins: [mountMixin]
};
</script>

<style scoped></style>
