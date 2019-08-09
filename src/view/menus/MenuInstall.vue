<template>
  <div style="width: 90%;">
    <h1>安装</h1>
    <h2>通过 npm 或 yarn 安装</h2>
    <div>
      <ani-card>
        <prism-editor readonly :code="codeNpm" language="shell"></prism-editor>
        <prism-editor readonly :code="codeYarn" language="shell"></prism-editor>
      </ani-card>
    </div>
    <h2>通过 CDN 安装</h2>
    <div>

      <ani-card>
        <prism-editor readonly :code="codeCss" language="markup"></prism-editor>
        <prism-editor
          readonly
          :code="codeScript"
          language="markup"
        ></prism-editor>
      </ani-card>
    </div>
    <h2>添加Material Icons</h2>
    <div>
      <ani-card>
        <prism-editor language="markup" :code="codeFont"></prism-editor>
      </ani-card>
    </div>
  </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism.css";
import PrismEditor from "vue-prism-editor";
import AniCard from "../../components/AniCard";
import mountMixin from "../component/mixin";
export default {
  name: "MenuInstall",
  mixins: [mountMixin],
  components: {
    AniCard,
    PrismEditor
  },
  data() {
    return {
      codeNpm: `npm install ani-ui@latest`,
      codeYarn: `yarn add ani-ui@latest`,
      codeCss: `<link rel="stylesheet" href="https://unpkg.com/ani-ui/dist/ani-ui.css">`,
      codeScript: `<script src="https://unpkg.com/ani-ui/dist/ani-ui.common.js"/>`,
      codeFont:`<link href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css" rel="stylesheet">`,
    };
  }
};
</script>

<style scoped></style>
