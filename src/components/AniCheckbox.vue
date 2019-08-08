<template>
  <label>
    <div class="ani-checkbox-parent-style">
      <input
        style="display: none"
        type="checkbox"
        :checked="checked"
        @change="handleChange"
      />
      <div class="ani-checkbox--main-style"></div>
    </div>
  </label>
</template>

<script>
export default {
  name: "AniCheckbox",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean
  },
  methods: {
    handleChange() {
      if (this.checked) {
        this.$emit("change", false);
      } else {
        this.$emit("change", true);
      }
    }
  }
};
</script>

<style scoped>
.ani-checkbox--main-style {
  width: 20px;
  height: 20px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.ani-checkbox-parent-style
  input[type="checkbox"]:checked
  + .ani-checkbox--main-style {
  background-color: pink;
}
</style>
