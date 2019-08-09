<template>
  <div>
    <label>
      <div class="ani-switch--style">
        <input type="checkbox" :checked="checked" @change="handleChange" />
        <div class="ani-switch-real-switch-style"></div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "AniSwitch",
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
.ani-switch--style {
  width: 50px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
}
.ani-switch--style input[type="checkbox"] {
  display: none;
}
.ani-switch--style
  input[type="checkbox"]:checked
  + .ani-switch-real-switch-style {
  transform: translateX(30px);
  background-color: white;
}
.ani-switch--style
  input[type="checkbox"]:checked
  + .ani-switch-real-switch-style:hover {
  background-color: rgb(200, 200, 200);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}
.ani-switch--style
  input[type="checkbox"]:checked
  + .ani-switch-real-switch-style:active {
  background-color: rgb(150, 150, 150);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}
.ani-switch-real-switch-style {
  position: absolute;
  top: -2px;
  width: 25px;
  height: 25px;
  transition: all 500ms;
  background-color: rgb(200, 200, 200);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
}
.ani-switch-real-switch-style:hover {
  background-color: rgb(150, 150, 150);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}
.ani-switch-real-switch-style:active {
  background-color: rgb(100, 100, 100);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
}
</style>
