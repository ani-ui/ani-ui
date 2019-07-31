<template>
  <div >
    <div style="width: 800px;height: 300px;position: fixed;left: 100px;top: 100px">
      <ani-card>

        <div class="home-animate-tile" style="position:absolute;bottom: 30px;height: 100px;width: 500px;background-color:#aaaaaa;">
          <div>
            <span style="font-size: 40px">Ani UI</span>
          </div>
        </div>
      </ani-card>
    </div>
    <div style="height: 300px;width: 300px;position: fixed;right: 200px;top: 100px">
      <ani-card>
        <h1>一套基于</h1>
        <br/>
        <div class="home-vue-title-style">Vue 2</div>
        <h1>的动效组件库</h1>
      </ani-card>
    </div>

    <div>
      <div class="start-use" style="position: fixed;width: 40%;text-align: center;margin-left: 30%;">
        <span style="font-size: 45px;font-weight: bolder;padding: 0 100px">开始使用Ani UI</span>
      </div>
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
      transform: scale(1.2);
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
      transform: scale(1);
      color: red;
    }
  }

  .home-animate-tile {
    margin-left: 100px;
    background:#42b983;
    animation: 10s animate-tile-home infinite;
  }
  @keyframes animate-tile-home {
    from,to{
      border: 1px solid #8accaa;
      background:#42b983;
    }
    15%{
      transform: scale(1.5) skewX(-15deg);
    }
    25%{
      border: 10px solid #42b983;
      border-top-left-radius: 100px;
      border-bottom-right-radius: 100px;
    }
    50%{
      height: 200px;
      border-radius: 100px;
      font-size: 100px;
      background: greenyellow;
    }
    75%{
      border: 10px solid #249eff;
    }
  }

  .start-use {
    height: 100px;
    line-height: 100px;
    border-radius: 5px;
    transition: all 2s;
    background: #217cd1;
    bottom: 300px;
    box-shadow: 0 0 10px rgba(0,0,0,.4);
  }
  .start-use:hover{
    height: 400px;
    line-height: 400px;
    border-radius: 200px;
    background: #249eff;
    box-shadow: 0 0 40px rgba(0,0,0,.4);
    bottom: 150px;
  }
  .start-use:active{
    height: 400px;
    line-height: 400px;
    border-radius: 100px;
    background: #122a53;
    color: white;
    box-shadow: 0 0 5px rgba(0,0,0,.4);
    bottom: 150px;
  }
</style>
