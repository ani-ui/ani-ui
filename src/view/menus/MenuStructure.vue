<template>
  <div style="width: 90%">
    <h1>框架</h1>
    <card-code-display title="Header" :code="codeHeader">
      <ani-header>
        <ani-header-link>TEST</ani-header-link>
      </ani-header>
    </card-code-display>
    <card-code-display title="侧栏和主界面">
      <ani-content>
        <ani-side-bar><div style="height: 100px">Side Bar</div></ani-side-bar>
        <ani-main
          ><div style="height: 100px;background-color:rgba(0,0,0,0.2);">
            Main
          </div></ani-main
        >
      </ani-content>
    </card-code-display>
  </div>
</template>

<script>
import mountMixin from "../component/mixin";
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniHeader from "../../components/AniHeader";
import AniHeaderLink from "../../components/AniHeaderLink";
import AniSideBar from "../../components/AniSideBar";
import AniMain from "../../components/AniMain";
import AniContent from "../../components/AniContent";
export default {
  name: "MenuStructure",
  components: {
    CardCodeDisplay,
    AniHeader,
    AniHeaderLink,
    AniContent,
    AniMain,
    AniSideBar
  },
  mixins: [mountMixin],
  data: function() {
    return {
      codeHeader: `
<ani-header>
    <ani-header-link>TEST</ani-header-link>
</ani-header>`
    };
  }
};
</script>

<style scoped></style>
