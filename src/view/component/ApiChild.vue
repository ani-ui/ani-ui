<template>
  <div style="width: 100%;">
    <div style="width: 100%;height: 50px" v-for="item in value" :key="item.name+item.type">
      <div style="display: inline-block;width: 20%;line-height: 50px">
        <span>{{ item.name }}</span>
      </div>
      <div style="display: inline-block;width: 20%;line-height: 50px">
        <span>{{ item.type }}</span>
      </div>
      <div style="display: inline-block;width: 20%;line-height: 50px">
        <span>{{ item.value }}</span>
      </div>
      <div style="display: inline-block;width: 40%;line-height: 50px">
        <span>{{ item.describe }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApiChild",
  props: {
    value:Object
    // name: String,
    // type: String,
    // value: String,
    // describe: String
  }
};
</script>

<style scoped></style>
