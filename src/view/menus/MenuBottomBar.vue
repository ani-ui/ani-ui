<template>
  <div style="width: 90%">
    <h1>ani-bottom-bar 底部导航栏</h1>
    <card-code-display>
      <ani-bottom-bar>
          <ani-bottom-bar-item >
              <i class="material-icons">home</i>
          </ani-bottom-bar-item>
          <ani-bottom-bar-item >
              <i class="material-icons">face</i>
          </ani-bottom-bar-item>
      </ani-bottom-bar>
    </card-code-display>
  </div>
</template>

<script>
import CardCodeDisplay from "../component/CardCodeDisplay";
import AniBottomBarItem from "../../components/AniBottomBarItem";
import AniBottomBar from "../../components/AniBottomBar";
export default {
  name: "MenuBottomBar",
  components: { AniBottomBar, AniBottomBarItem, CardCodeDisplay }
};
</script>

<style scoped></style>
