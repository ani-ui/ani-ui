<template>
  <ani-content>
    <ani-side-bar :width="320">
      <aside-bar />
    </ani-side-bar>
    <ani-main style="width: 400px">
      <div id="main-over" :style="`height: ${height}px;overflow-y: auto`">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </ani-main>
  </ani-content>
</template>

<script>
import AniContent from "../components/AniContent";
import AniSideBar from "../components/AniSideBar";
import AniMain from "../components/AniMain";
import AsideBar from "./AsideBar";

export default {
  name: "ComponentView",
  mounted() {
    this.height = window.innerHeight - 64;
    window.onresize = () => {
      this.height = window.innerHeight - 64;
    };
  },
  data() {
    return {
      height: 100
    };
  },
  components: { AsideBar, AniMain, AniSideBar, AniContent }
};
</script>
