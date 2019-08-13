<template>
  <div style="width: 90%">
    <h1>栅格系统</h1>
    <h4>使用12栅格分隔区域</h4>
    <ani-row>
      <ani-col :col="12">
        <div class="black-box">12</div>
      </ani-col>
      <ani-col :col="12"></ani-col>
      <ani-col :col="6">
        <div class="black-box-dark">6</div>
      </ani-col>
      <ani-col :col="6">
        <div class="black-box-light">6</div>
      </ani-col>
      <ani-col :col="12"></ani-col>
      <ani-col :col="4">
        <div class="black-box-dark">4</div>
      </ani-col>
      <ani-col :col="4">
        <div class="black-box-light">4</div>
      </ani-col>
      <ani-col :col="4">
        <div class="black-box-dark">4</div>
      </ani-col>
      <ani-col :col="12"></ani-col>
      <ani-col :col="3">
        <div class="black-box-dark">3</div>
      </ani-col>
      <ani-col :col="3">
        <div class="black-box-light">3</div>
      </ani-col>
      <ani-col :col="3">
        <div class="black-box-dark">3</div>
      </ani-col>
      <ani-col :col="3">
        <div class="black-box-light">3</div>
      </ani-col>
      <ani-col :col="12"></ani-col>
      <ani-col :col="2" v-for="item in 6" :key="item">
        <div :class="item % 2 === 0 ? 'black-box-light' : 'black-box-dark'">
          2
        </div>
      </ani-col>
      <ani-col :col="12"></ani-col>
      <ani-col :col="1" v-for="item in 12" :key="`item${item}`">
        <div :class="item % 2 === 0 ? 'black-box-light' : 'black-box-dark'">
          1
        </div>
      </ani-col>
    </ani-row>
  </div>
</template>

<script>
import AniCol from "../../components/Col/src/AniCol";
import AniRow from "../../components/Row/src/AniRow";
export default {
  name: "MenuLayout",
  components: {
    AniCol,
    AniRow
  }
};
</script>

<style>
.black-box {
  background-color: rgba(0, 0, 0, 0.6);
  height: 40px;
  border-radius: 5px;
  line-height: 40px;
  color: white;
}
.black-box-dark {
  background-color: rgba(0, 0, 0, 0.4);
  height: 40px;
  border-radius: 5px;
  line-height: 40px;
}
.black-box-light {
  background-color: rgba(0, 0, 0, 0.2);
  height: 40px;
  border-radius: 5px;
  line-height: 40px;
}
</style>
