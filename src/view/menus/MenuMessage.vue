<template>
  <div style="width: 70%">
    <h1>消息通知</h1>
    <card-code-display>
      <ani-button @click="handleMakeMsg">产生一条消息</ani-button>
    </card-code-display>
  </div>
</template>

<script>
import mountMixin from "../component/mixin";
import AniButton from "../../components/AniButton";
import CardCodeDisplay from "../component/CardCodeDisplay";
export default {
  name: "MenuMessage",
  components: { CardCodeDisplay, AniButton },
  methods: {
    handleMakeMsg() {
      this.$message();
    }
  },
  mixins: [mountMixin]
};
</script>

<style scoped></style>
