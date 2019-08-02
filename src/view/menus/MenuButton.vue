<template>
  <div style="width: 70%">
    <h1>ani-button 按钮</h1>
    <h2>基础使用</h2>
    <div >
      <card-code-display
        title="一般按钮"
        code="<ani-button>一般按钮</ani-button>"
      >
        <ani-button>一般按钮</ani-button>
      </card-code-display>
      <card-code-display
        title="圆角按钮"
        code="<ani-button round>圆角按钮</ani-button>"
      >
        <ani-button round>圆角按钮</ani-button>
      </card-code-display>
      <card-code-display
        title="透明按钮"
        code="<ani-button transparent>透明按钮</ani-button>"
      >
        <ani-button transparent>透明按钮</ani-button>
      </card-code-display>
      <card-code-display
        title="按钮禁用"
        code="<ani-button disable>按钮禁用</ani-button>"
      >
        <ani-button disable>按钮禁用</ani-button>
      </card-code-display>
      <card-code-display title="动态按钮(使用AniIconText)" :code="codeButton">
        <ani-button>
          <ani-icon-text>
            <template slot="icon">
              <i class="material-icons">face</i>
            </template>
            动态按钮
          </ani-icon-text>
        </ani-button>
      </card-code-display>
      <card-code-display title="不同尺寸" :code="codeSizeButton">
        <ani-button size="xs">xs</ani-button>
        <ani-button size="sm">sm</ani-button>
        <ani-button size="md">md</ani-button>
        <ani-button size="lg">lg</ani-button>
        <ani-button size="xl">xl</ani-button>
      </card-code-display>
    </div>
  </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism.css";
import AniButton from "../../components/AniButton";
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniIconText from "../../components/AniIconText";
export default {
  name: "MenuButton",
  components: { CardCodeDisplay, AniButton, AniIconText },

  data: function() {
    return {
      codeButton: `
<ani-button >
    <ani-icon-text>
        <template slot="icon">
            <i class="material-icons">face</i>
        </template>
         动态按钮
    </ani-icon-text>
</ani-button>
`,
      codeSizeButton: `
<ani-button size="xs">xs</ani-button>
<ani-button size="sm">sm</ani-button>
<ani-button size="md">md</ani-button>
<ani-button size="lg">lg</ani-button>
<ani-button size="xl">xl</ani-button>
`
    };
  },
  mounted() {},
  methods: {
    handleClick() {
      window.console.log("press");
      this.$message();
    }
  }
};
</script>

<style scoped></style>
