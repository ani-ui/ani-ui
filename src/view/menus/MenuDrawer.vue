<template>
  <div style="width: 70%">
    <h1>ani-drawer 抽屉</h1>
    <card-code-display title="基础使用" :code="codeDrawer" :js="codeDrawerJs">
      <div>
        <ani-button @click="handleOpenClose">开启/关闭 抽屉</ani-button>
        <ani-drawer :drawer-open.sync="menuOpened"></ani-drawer>
      </div>
    </card-code-display>
    <card-code-display title="方向" :code="codeDrawer" :js="codeDrawerJs">
      <div>
        <ani-button @click="handleOpenCloseD('left')">左抽屉</ani-button>
        <ani-button @click="handleOpenCloseD('right')">右抽屉</ani-button>
        <ani-button @click="handleOpenCloseD('top')">上抽屉</ani-button>
        <ani-button @click="handleOpenCloseD('bottom')">下抽屉</ani-button>
        <ani-drawer
          :drawer-open.sync="menuOpened1"
          :direction="directionDrawer"
        ></ani-drawer>
      </div>
    </card-code-display>
    <card-code-display
      title="模糊"
      subtitle="仅支持部分浏览器，或在chrome中开启实验特性(chrome://flags/#enable-experimental-web-platform-features)"
      :code="codeDrawer"
      :js="codeDrawerJs"
    >
      <div>
        <ani-button @click="handleOpenClose2">开启/关闭 抽屉</ani-button>
        <ani-drawer :drawer-open.sync="menuOpened2" blur></ani-drawer>
      </div>
    </card-code-display>
  </div>
</template>

<script>
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniDrawer from "../../components/AniDrawer";
import AniButton from "../../components/AniButton";
import mountMixin from "../component/mixin";
export default {
  name: "MenuDrawer",
  components: { CardCodeDisplay, AniDrawer, AniButton },
  data: function() {
    return {
      menuOpened: false,
      menuOpened1: false,
      menuOpened2: false,
      directionDrawer: "left",
      codeDrawer: `
<ani-button @click="handleOpenClose">开启/关闭 抽屉</ani-button>
<ani-drawer :drawer-open.sync="menuOpened"></ani-drawer>
      `,
      codeDrawerJs: `
        data: function() {
    return {
      menuOpened: false,}}
      methods: {
    handleOpenClose() {
      this.menuOpened = !this.menuOpened;
    }
  }
        `
    };
  },
  methods: {
    handleOpenClose() {
      this.menuOpened = !this.menuOpened;
    },
    handleOpenClose2() {
      this.menuOpened2 = !this.menuOpened2;
    },
    handleOpenCloseD(direction) {
      this.directionDrawer = direction;
      this.menuOpened1 = !this.menuOpened1;
    }
  },
  mixins: [mountMixin]
};
</script>

<style scoped></style>
