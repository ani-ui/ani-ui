<template>
  <label>
    <div class="ani-checkbox-parent-style">
      <input
        style="display: none"
        type="checkbox"
        :checked="checked"
        @change="handleChange"
      />
      <div class="ani-checkbox--main-style">
          <div class="ani-checkbox-checked__mark">
              <div class="ani-checkbox-mark__left"></div>
              <div class="ani-checkbox-mark__right"></div>
          </div>
      </div>
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
    .ani-checkbox-parent-style{
        position: relative;
    }
.ani-checkbox--main-style {
  width: 20px;
  height: 20px;
    box-shadow: 0 0 0 rgba(0,0,0,0.3),inset 0 0 5px rgba(0,0,0,0.3);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
    position: relative;
    transition: all 500ms;
}
    .ani-checkbox--main-style:hover{
        box-shadow:  0 0 10px rgba(0,0,0,0.3) , inset 0 0 5px rgba(0,0,0,0.5);
    }
    .ani-checkbox--main-style:active{
        box-shadow:  0 0 5px rgba(0,0,0,0.3) , inset 0 0 2px rgba(0,0,0,0.5);
    }
.ani-checkbox-parent-style
  input[type="checkbox"]:checked
  + .ani-checkbox--main-style {
  background-color: rgba(0,0,0,0.4);
}
    .ani-checkbox-parent-style
    input[type="checkbox"]:checked
    + .ani-checkbox--main-style .ani-checkbox-checked__mark{
        transform: rotate(0) scale(1);
        opacity: 1;
    }
    .ani-checkbox-checked__mark {
        position: absolute;
        height: 20px;
        width: 20px;
        opacity: 0;
        transition: all 500ms;
        transform: rotate(-30deg) scale(1.5);
    }

    .ani-checkbox-mark__left {
        height: 2px;
        width: 6px;
        top: 12px;
        left: 1px;
        background-color: white;
        position: absolute;
        transform: rotate(45deg);
    }
    .ani-checkbox-mark__right {
        height: 2px;
        width: 16px;
        top: 10px;
        left: 4px;
        background-color: white;
        position: absolute;
        transform: rotate(-45deg);
    }
</style>
