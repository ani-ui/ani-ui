<template>
  <div style="width: 90%">
    <h1>ani-counter 计数器</h1>
    <card-code-display title="基础使用" :code="code" :js="codeJs">
      <ani-counter :step="20" v-model="number"></ani-counter>
    </card-code-display>
  </div>
</template>

<script>
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniCounter from "../../components/AniCounter";
export default {
  name: "MenuCounter",
  components: { AniCounter, CardCodeDisplay },
  data() {
    return {
      number: 10,
      code: ` <ani-counter :step="20" v-model="number"></ani-counter>`,
      codeJs: `data(){
        return {
            number:10,
        }
    },`
    };
  }
};
</script>

<style scoped></style>
