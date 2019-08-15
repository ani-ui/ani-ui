<template>
  <ani-content>
    <ani-scroll-bar :style="`height: ${height}px;overflow-x:hidden`">
      <ani-side-bar :width="320" >
        <aside-bar />
      </ani-side-bar>
    </ani-scroll-bar>
    <ani-main style="width: 400px">
      <ani-scroll-bar id="main-over" :style="`height: ${height}px;overflow-y: auto`">
        <transition name="fade" mode="out-in">
          <router-view style="margin-left: 5%"></router-view>
        </transition>
      </ani-scroll-bar>
    </ani-main>
  </ani-content>
</template>

<script>
import AniContent from "../components/AniContent";
import AniSideBar from "../components/AniSideBar";
import AniMain from "../components/AniMain";
import AsideBar from "./AsideBar";
import AniScrollBar from "../components/AniScrollBar";

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
  components: { AsideBar, AniMain, AniSideBar, AniContent,AniScrollBar }
};
</script>
