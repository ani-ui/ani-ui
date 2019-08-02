<template>
  <div>
    <h1>ani-button 按钮</h1>
    <h2>基础使用</h2>
    <div style="width: 70%">
      <ani-card title="一般按钮">
        <ani-button>按钮</ani-button>
        <ani-code-block>
          <prism-editor :code="codeButton" language="markup"></prism-editor>
        </ani-code-block>
      </ani-card>
      <ani-card title="圆角按钮">
        <ani-button round>按钮</ani-button>
        <ani-code-block>
          <prism-editor
            :code="codeButtonCircle"
            language="markup"
          ></prism-editor>
        </ani-code-block>
      </ani-card>
        <ani-card title="按钮禁用">
            <ani-button disable>按钮禁用</ani-button>
            <ani-code-block>
                <prism-editor
                        :code="codeButtonDisable"
                        language="markup"
                ></prism-editor>
            </ani-code-block>
        </ani-card>
    </div>
  </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism.css";
import PrismEditor from "vue-prism-editor";
import AniButton from "../../components/AniButton";
import AniCard from "../../components/AniCard";
import AniCodeBlock from "../../components/AniCodeBlock";
export default {
  name: "MenuButton",
  components: { AniCodeBlock, AniCard, AniButton, PrismEditor },

  data: function() {
    return {
      codeButton:
        "<ani-button>按钮</ani-button>\n<ani-button>按钮</ani-button>",
      codeButtonCircle: "<ani-button round>圆角按钮</ani-button>",
        codeButtonDisable: "<ani-button disable>按钮禁用</ani-button>",
    };
  }
};
</script>

<style scoped></style>