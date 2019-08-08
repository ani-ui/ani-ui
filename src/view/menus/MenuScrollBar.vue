<template>
  <div style="width: 90%">
    <h1>ani-scroll-bar 滚动条</h1>
    <card-code-display
      title="基础使用"
      subtitle="只适配使用webkit的浏览器(如chrome,safari)"
      :code="codeScroll"
    >
      <ani-scroll-bar style="height: 200px;width: 50%">
        <div>
          <span>鼠标滚动</span>
          <div style="height: 1000px"></div>
          <i class="material-icons">favorite</i>
        </div>
      </ani-scroll-bar>
    </card-code-display>
  </div>
</template>

<script>
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniScrollBar from "../../components/AniScrollBar";
export default {
  name: "MenuScrollBar",
  components: { CardCodeDisplay, AniScrollBar },
  data() {
    return {
      codeScroll: `<ani-scroll-bar style="height: 200px;width: 50%">
    <div>
        <span>鼠标滚动</span>
        <div style="height: 1000px"></div>
        <i class="material-icons">favorite</i>
    </div>
</ani-scroll-bar>`
    };
  }
};
</script>

<style scoped></style>
