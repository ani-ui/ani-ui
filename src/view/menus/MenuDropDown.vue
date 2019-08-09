<template>
  <div style="width: 90%">
    <h1>ani-drop-down 下拉菜单</h1>
    <card-code-display title="基础使用" :code="codeDrop">
      <ani-drop-down>
        <ani-button slot="target">dropdown</ani-button>
        <ani-drop-down-item
          v-for="item in 5"
          :key="`ani-drop-down${item}`"
          :title="`dropdown item ${item}`"
        ></ani-drop-down-item>
      </ani-drop-down>
    </card-code-display>
    <card-code-display title="模糊" :code="codeBlur">
      <ani-drop-down blur>
        <ani-button slot="target">blur</ani-button>
        <ani-drop-down-item
          v-for="item in 5"
          :key="`ani-drop-down${item}`"
          :title="`dropdown item ${item}`"
        ></ani-drop-down-item>
      </ani-drop-down>
    </card-code-display>
  </div>
</template>

<script>
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniDropDown from "../../components/AniDropDown";
import AniButton from "../../components/AniButton";
import AniDropDownItem from "../../components/AniDropDownItem";
export default {
  name: "MenuDropDown",
  components: { AniDropDownItem, AniDropDown, CardCodeDisplay, AniButton },
  data: function() {
    return {
      codeDrop: `<ani-drop-down>
    <ani-button slot="target">dropdown</ani-button>
    <ani-drop-down-item v-for="item in 5"  :title="dropdown item"></ani-drop-down-item>
</ani-drop-down>`,
        codeBlur:`<ani-drop-down blur>
    <ani-button slot="target">dropdown</ani-button>
    <ani-drop-down-item v-for="item in 5"  :title="dropdown item"></ani-drop-down-item>
</ani-drop-down>`
    };
  }
};
</script>

<style scoped></style>
