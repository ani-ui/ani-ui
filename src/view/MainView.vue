<template>
  <div >

    <div style="height: 300px;width: 300px;position: fixed;right: 10%;top: 100px">
      <keep-alive>
        <ani-card>
          <h1>一套基于</h1>
          <br/>
          <div class="home-vue-title-style">Vue 2</div>
          <h1>的动效组件库</h1>
        </ani-card>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import AniCard from "../components/AniCard";
export default {
  name: "MainView",
  components: {AniCard},
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
    from{
      color: red;
      transform: scale(1);
    }
    10%{
      color: orangered;
    }
    20%{
      color: orange;
    }
    30%{
      color: yellow;
    }
    40%{
      color: yellowgreen;
    }
    50%{
      color: forestgreen;
    }
    60%{
      color:teal;
    }
    70%{
      color: #42b983;
    }
    80%{
      color: dodgerblue;
    }
    90%{
      color: purple;
    }
    to{
      color: red;
    }
  }

</style>
