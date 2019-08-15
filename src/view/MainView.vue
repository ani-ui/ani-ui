<template>
  <div>
    <ani-card style="min-width: 120px;">
      <div style="font-size:30px ">
        <div style="display: inline-block">一套基于</div>
        <div class="home-vue-title-style" style="display: inline-block">
          Vue 2
        </div>
        <div style="display: inline-block">的动效组件库</div>
      </div>
    </ani-card>
    <ani-parallax height="400" :image="require('../assets/parallax-1.webp')">
      <div class="main-view-parallax__text">
        <h1>Ani UI</h1>
        <h2>Animate component for vue.js 2.0</h2>
      </div>
    </ani-parallax>
    <ani-parallax height="400" :image="require('../assets/parallax-2.webp')">
      <div class="main-view-parallax__text">
        <h1>Light Weight</h1>
      </div>
    </ani-parallax>
    <ani-parallax height="400" :image="require('../assets/parallax-3.webp')">
      <div class="main-view-parallax__text">
        <h1>Stable</h1>
      </div>
    </ani-parallax>
    <ani-parallax height="400" :image="require('../assets/parallax-4.webp')">
      <div class="main-view-parallax__text">
        <h1>Animation</h1>
      </div>
    </ani-parallax>
    <ani-parallax height="400" :image="require('../assets/parallax-5.webp')">
      <div class="main-view-parallax__text">
        <h1>Special Effect</h1>
      </div>
    </ani-parallax>
    <ani-parallax height="400" :image="require('../assets/parallax-6.webp')">
      <div class="main-view-parallax__text">
        <h1>Future</h1>
      </div>
    </ani-parallax>
  </div>
</template>

<script>
import AniCard from "../components/AniCard";
import AniParallax from "../components/AniParallax";
export default {
  name: "MainView",
  components: { AniCard, AniParallax }
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

.main-view-parallax__text {
  color: white;
  user-select: none;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.8));
  transition: all 500ms;
}
.main-view-parallax__text:hover{
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));
}
</style>
