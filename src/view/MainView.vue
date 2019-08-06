<template>
  <div>
    <div>
      <ani-row>
        <ani-col :col="12">
          <ani-card style="min-width: 120px">
            <div style="font-size:30px ">
              <div style="display: inline-block">一套基于</div>
              <div class="home-vue-title-style" style="display: inline-block">
                Vue 2
              </div>
              <div style="display: inline-block">的动效组件库</div>
            </div>
          </ani-card>
        </ani-col>
        <ani-col :col="12">
          <img
            src="../assets/logo-main.png"
            style="width: 80%;margin-left: 10%"
            alt=""
          />
        </ani-col>
      </ani-row>
    </div>
  </div>
</template>

<script>
import AniCard from "../components/AniCard";
import AniCol from "../components/Col/src/AniCol";
import AniRow from "../components/Row/src/AniRow";
export default {
  name: "MainView",
  components: { AniCard, AniCol, AniRow }
};
</script>

<style scoped>
.home-vue-title-style {
  margin-left: 20px;
  font-size: 30px;
  font-weight: bold;
  animation: 10s animate-title-vue infinite;
}
@keyframes animate-title-vue {
  from {
    color: red;
    transform: scale(1);
  }
  10% {
    color: orangered;
  }
  20% {
    color: orange;
  }
  30% {
    color: yellow;
  }
  40% {
    color: yellowgreen;
  }
  50% {
    color: forestgreen;
  }
  60% {
    color: teal;
  }
  70% {
    color: #42b983;
  }
  80% {
    color: dodgerblue;
  }
  90% {
    color: purple;
  }
  to {
    color: red;
  }
}
</style>
