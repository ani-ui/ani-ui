<template>
  <div style="width: 90%">
    <h1>ani-back-top 回到顶部</h1>
    <card-code-display title="基础使用" subtitle="滑轮下滑查看效果" :code="codeBacktop">
    </card-code-display>
    <div style="height: 1500px"></div>
  </div>
</template>

<script>
import mountMixin from "../component/mixin";
import CardCodeDisplay from "../component/CardCodeDisplay";

export default {
  name: "MenuBacktop",
  components: { CardCodeDisplay },
  mixins: [mountMixin],

  data: function () {
    return {codeBacktop: `<ani-back-top target="main-over"></ani-back-top>`}
  }
};
</script>

<style scoped></style>
