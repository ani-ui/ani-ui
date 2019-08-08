<template>
  <div style="width: 90%">
    <h1>ani-float-button 浮动按钮</h1>
    <card-code-display title="基础使用" :code="codeFloat">
      <ani-float-button></ani-float-button>
    </card-code-display>
    <card-code-display title="可与回到顶部组件共存" subtitle="滑动可查看" :code="codeFloat">
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
  mixins: [mountMixin],
  data: function () {
    return {codeFloat:`<ani-float-button></ani-float-button>`}
  }
};
</script>

<style scoped></style>
