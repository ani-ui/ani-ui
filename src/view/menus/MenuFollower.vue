<template>
  <div style="width: 70%">
    <h1>ani-follower 鼠标跟随</h1>
    <div>
      <card-code-display title="基础使用" :code="followCode">
        <ani-button @click="handleClickMouse">开启/关闭鼠标跟随</ani-button>
      </card-code-display>
    </div>
  </div>
</template>

<script>
import AniButton from "../../components/AniButton";
import CardCodeDisplay from "../component/CardCodeDisplay";
import mountMixin from "../component/mixin";
export default {
  name: "MenuFollower",
  components: { CardCodeDisplay, AniButton },
  methods: {
    handleClickMouse() {
      this.$store.commit("changeMouseFollow", !this.$store.state.mouseFollow);
    }
  },
  mixins: [mountMixin],
  data() {
    return {
      followCode: `
<ani-button @click="handleClickMouse">开启/关闭鼠标跟随</ani-button>
<!-- 建议放在根组件下，通过vuex传递参数 -->
<ani-follower :normal="$store.state.mouseFollow" v-if="$store.state.mouseFollow"></ani-follower>
`
    };
  }
}
</script>

<style scoped></style>
