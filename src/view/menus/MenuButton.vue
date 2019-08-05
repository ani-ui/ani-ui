<template>
  <div style="width: 70%">
    <h1>ani-button 按钮</h1>
    <h2>基础使用</h2>
    <div>
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
    <api-docs>
      <api-child
        v-for="item in apiChildren"
        :key="item.name"
        :name="item.name"
        :type="item.type"
        :value="item.value"
        :describe="item.describe"
      ></api-child>
    </api-docs>
  </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism.css";
import AniButton from "../../components/AniButton";
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniIconText from "../../components/AniIconText";
import ApiDocs from "../component/ApiDocs";
import ApiChild from "../component/ApiChild";
import mountMixin from "../component/mixin";
export default {
  name: "MenuButton",
  components: { ApiChild, ApiDocs, CardCodeDisplay, AniButton, AniIconText },

  data: function() {
    return {
      apiChildren: [
        {name: "circle", type: "Boolean", value: "true/false", describe: "按钮圆角"},
        {name: "transparent", type: "Boolean", value: "true/false", describe: "按钮透明"},
        {name: "disable", type: "Boolean", value: "true/false", describe: "按钮禁用"},
        {name: "size", type: "String", value: "xs/sm/md/lg/xl", describe: "按钮大小"},
      ],
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
  },
  mixins:[mountMixin],
};
</script>

<style scoped></style>
