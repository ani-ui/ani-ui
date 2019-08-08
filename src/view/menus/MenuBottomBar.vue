<template>
  <div style="width: 90%">
    <h1>ani-bottom-bar 底部导航栏</h1>
    <card-code-display title="基础使用" :code="codeBottomBar">
      <ani-bottom-bar :blur="blurState">
        <ani-bottom-bar-item>
          <i class="material-icons">home</i>
        </ani-bottom-bar-item>
        <ani-bottom-bar-item>
          <i class="material-icons">face</i>
        </ani-bottom-bar-item>
      </ani-bottom-bar>
    </card-code-display>
    <card-code-display title="模糊" :code="codeBottomBarBlur">
      <ani-button @click="handleBlur">BLUR</ani-button>
    </card-code-display>
  </div>
</template>

<script>
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniBottomBarItem from "../../components/AniBottomBarItem";
import AniBottomBar from "../../components/AniBottomBar";
import AniButton from "../../components/AniButton";
export default {
  name: "MenuBottomBar",
  components: { AniBottomBar, AniBottomBarItem, CardCodeDisplay, AniButton },
  data() {
    return {
      codeBottomBar: `<ani-bottom-bar>
    <ani-bottom-bar-item >
        <i class="material-icons">home</i>
    </ani-bottom-bar-item>
    <ani-bottom-bar-item >
        <i class="material-icons">face</i>
    </ani-bottom-bar-item>
</ani-bottom-bar>`,
      codeBottomBarBlur: `<ani-bottom-bar :blur="5">
    <ani-bottom-bar-item >
        <i class="material-icons">home</i>
    </ani-bottom-bar-item>
    <ani-bottom-bar-item >
        <i class="material-icons">face</i>
    </ani-bottom-bar-item>
</ani-bottom-bar>`,
      blurState: 0
    };
  },
  methods: {
    handleBlur() {
      this.blurState = this.blurState === 5 ? 0 : 5;
    }
  }
};
</script>

<style scoped></style>
