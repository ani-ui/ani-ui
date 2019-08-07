<template>
  <div style="width: 90%">
    <h1>ani-progress 进度条</h1>
    <card-code-display>
      <ani-progress style="margin-left: 20px" :percent="percentageLine"></ani-progress>
      <ani-button @click="handleAddLine">add</ani-button>
      <ani-button @click="handleSubLine">sub</ani-button>
    </card-code-display>
    <card-code-display>
      <ani-progress loading style="margin-left: 20px"></ani-progress>
    </card-code-display>
    <card-code-display>
      <ani-progress
        circle
        :percent="percentage"
        style="margin-left: 20px"
      ></ani-progress>
      <ani-button @click="handleAdd">add</ani-button>
      <ani-button @click="handleSub">sub</ani-button>
    </card-code-display>
    <card-code-display>
      <ani-progress loading circle style="margin-left: 20px"></ani-progress>
    </card-code-display>
  </div>
</template>

<script>
import AniProgress from "../../components/AniProgress";
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniButton from "../../components/AniButton";
export default {
  name: "MenuProgress",
  components: { CardCodeDisplay, AniProgress, AniButton },
  data() {
    return {
      percentage: 10,
      percentageLine:10,
    };
  },
  methods: {
    handleAdd() {
      this.percentage += 10;
    },
    handleSub() {
      this.percentage -= 10;
    },
    handleAddLine() {
      this.percentageLine+=10;
    },
    handleSubLine() {
      this.percentageLine-=10;
    }
  }
};
</script>

<style scoped></style>
