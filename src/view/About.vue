<template>
  <div>
    <div style="width: 60%;margin-left: 20%;height: 50%">
      <ani-card>
        <img src="../assets/logo-main.png" width="100%" alt="">
      </ani-card>
    </div>
    <div style="width: 60%;margin-left: 20%;height: 64px">
      <ani-button  style="float: right;">作者:laiiihz</ani-button>
    </div>
  </div>
</template>

<script>
import AniCard from "../components/AniCard";
import AniButton from "../components/AniButton";
export default {
  name: "About",
  components: { AniCard, AniButton }
};
</script>

<style></style>
