<template>
  <div style="width: 90%">
    <h1>ani-badge 标记</h1>
    <card-code-display title="dot" :code="code1">
      <ani-badge type="dot">
        <ani-button>标记</ani-button>
      </ani-badge>
    </card-code-display>
    <card-code-display title="dash" :code="code2">
      <ani-badge type="dash" extra="new">
        <ani-button>Dash</ani-button>
      </ani-badge>
    </card-code-display>
    <card-code-display title="circle" :code="code3">
      <ani-badge type="circle" :extra-number="5">
        <ani-button>circle</ani-button>
      </ani-badge>
    </card-code-display>
      <api-docs>
          <api-child :value="apiChildren"></api-child>
      </api-docs>
  </div>
</template>

<script>
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniBadge from "../../components/AniBadge";
import AniButton from "../../components/AniButton";
import ApiDocs from "../component/ApiDocs";
import ApiChild from "../component/ApiChild";
export default {
  name: "MenuBadge",
  components: {ApiChild, ApiDocs, AniBadge, CardCodeDisplay, AniButton },
  data: function() {
    return {
      code1: ` <ani-badge type="dot">
    <ani-button>标记</ani-button>
</ani-badge>`,
      code2: `<ani-badge type="dash" extra="new">
    <ani-button>Dash</ani-button>
</ani-badge>`,
      code3: `<ani-badge type="circle" :extra-number="5">
    <ani-button>circle</ani-button>
</ani-badge>`,
        apiChildren: [
            {
                name: "type",
                type: "String",
                value: "dot/dash/circle",
                describe: "类型"
            },
            {
                name: "extra",
                type: "String",
                value: "",
                describe: "额外文字"
            },
            {
                name: "type",
                type: "Number",
                value: "",
                describe: "额外数字"
            },
        ],
    };
  }
};
</script>

<style scoped></style>
