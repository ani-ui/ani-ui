<template>
  <div style="width: 90%">
    <h1>ani-tooltip 提示</h1>
    <card-code-display :code="codeTooltip1">
      <ani-tooltip content="tooltip">
        <ani-button>提示</ani-button>
      </ani-tooltip>
    </card-code-display>
    <card-code-display :code="codeTooltip2">
      <ani-tooltip content="tooltip" light>
        <ani-button>亮色主题</ani-button>
      </ani-tooltip>
    </card-code-display>
    <card-code-display :code="codeTooltip3">
      <ani-tooltip content="tooltip" :blur="3">
        <ani-button>模糊</ani-button>
      </ani-tooltip>
    </card-code-display>
  </div>
</template>

<script>
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniTooltip from "../../components/AniTooltip";
import AniButton from "../../components/AniButton";
export default {
  name: "MenuTooltip",
  components: { AniTooltip, CardCodeDisplay, AniButton },
  data: function() {
    return {
      codeTooltip1: `<ani-tooltip content="tooltip">
    <ani-button>提示</ani-button>
</ani-tooltip>`,
      codeTooltip2: `<ani-tooltip content="tooltip" light>
    <ani-button>亮色主题</ani-button>
</ani-tooltip>`,
      codeTooltip3: `<ani-tooltip content="tooltip"  :blur="3">
    <ani-button>模糊</ani-button>
</ani-tooltip>`
    };
  }
};
</script>

<style scoped></style>
