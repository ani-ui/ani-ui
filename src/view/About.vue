<template>
  <div style="height: 300px;width: 300px;">
    <ani-card>
      <template slot="title">
        about
        <div style="float: right;">
          <ani-button transparent>button</ani-button>
        </div>
      </template>
      <ani-scroll-bar></ani-scroll-bar>
    </ani-card>
  </div>
</template>

<script>
import AniCard from "../components/AniCard";
import AniButton from "../components/AniButton";
import AniScrollBar from "../components/AniScrollBar";
export default {
  name: "About",
  components: {AniScrollBar, AniCard, AniButton }
};
</script>

<style></style>
