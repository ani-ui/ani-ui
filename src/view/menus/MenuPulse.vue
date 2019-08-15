<template>
  <div style="width: 90%">
    <h1>ani-pulse 脉冲</h1>
    <card-code-display title="基础使用" :code="code">
      <ani-pulse width="150px" height="100px" border-radius="10px">
        <ani-button>PULSE</ani-button>
      </ani-pulse>
    </card-code-display>
    <api-docs>
      <api-child :value="apiChildren"></api-child>
    </api-docs>
  </div>
</template>

<script>
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniPulse from "../../components/AniPulse";
import AniButton from "../../components/AniButton";
import ApiDocs from "../component/ApiDocs";
import ApiChild from "../component/ApiChild";
export default {
  name: "MenuPulse",
  components: { ApiChild, ApiDocs, AniPulse, CardCodeDisplay, AniButton },
  data() {
    return {
      apiChildren: [
        {
          name: "width",
          type: "String",
          value: "100px/100%",
          describe: "宽度"
        },
        {
          name: "height",
          type: "String",
          value: "100px/100%",
          describe: "高度"
        },
        {
          name: "border-radius",
          type: "String",
          value: "100px/100%",
          describe: "圆角"
        }
      ],
      code: `<ani-pulse width="150px" height="100px" border-radius="10px">
    <ani-button>PULSE</ani-button>
</ani-pulse>`
    };
  }
};
</script>

<style scoped></style>
