<template>
  <div>
    <div class="ani-router-choose-item__style" @click="$router.push('/')">
      home
    </div>
    <div
      v-for="item in routers"
      :key="`${Math.random().toFixed(3)}${item}`"
      class="ani-router-choose-item__style"
      @click="$router.push({ name: item })"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AniRouterChoose",
  data() {
    return {
      routers: []
    };
  },
  watch: {
    $route(value) {
      this.routers = [];
      let temp = value.fullPath.split("/");
      for (let i = 1; i < temp.length; i++) {
        this.routers.push(temp[i]);
      }
    }
  },
  mounted() {
    let temp = this.$route.fullPath.split("/");
    for (let i = 1; i < temp.length; i++) {
      this.routers.push(temp[i]);
    }
  }
};
</script>

<style scoped>
.ani-router-choose-item__style {
  height: 25px;
  line-height: 25px;
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 10px;
  border: 1px solid transparent;
  transition: all 500ms;
  position: relative;
}
.ani-router-choose-item__style::after {
  content: "/";
  position: absolute;
  top: 0;
  right: -10px;
}
.ani-router-choose-item__style:hover {
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;
}
.ani-router-choose-item__style:active {
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: none;
}
</style>
