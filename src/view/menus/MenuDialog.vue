<template>
  <div style="width: 90%">
    <h1>ani-dialog 对话框</h1>
    <card-code-display title="基础使用">
      <ani-dialog title="基础使用" :visible.sync="dialogOpen"></ani-dialog>
      <ani-button @click="handleOpenDialog">打开对话框</ani-button>
    </card-code-display>
    <card-code-display
      title="模糊"
      subtitle="仅支持部分浏览器，或在chrome中开启实验特性(chrome://flags/#enable-experimental-web-platform-features)"
    >
      <ani-dialog title="模糊" :visible.sync="dialogOpenB" :blur="5"></ani-dialog>
      <ani-button @click="handleOpenDialogB">打开对话框</ani-button>
    </card-code-display>
  </div>
</template>

<script>
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniDialog from "../../components/AniDialog";
import AniButton from "../../components/AniButton";
export default {
  name: "MenuDialog",
  components: { AniDialog, CardCodeDisplay, AniButton },
  data() {
    return {
      dialogOpen: false,
      dialogOpenB: false
    };
  },
  methods: {
    handleOpenDialog() {
      this.dialogOpen = true;
    },
    handleOpenDialogB() {
      this.dialogOpenB = true;
    }
  }
};
</script>

<style scoped></style>
