<template>
  <div>
    <ani-bottom-bar :blur="5">
      <ani-bottom-bar-item>
        <i class="material-icons">home</i>
      </ani-bottom-bar-item>
      <ani-bottom-bar-item>
        <i class="material-icons">face</i>
      </ani-bottom-bar-item>
    </ani-bottom-bar>
    <ani-float-button></ani-float-button>
    <ani-top-loading :percentage="20"></ani-top-loading>
    <div style="width: 80%;margin-left: 10%">
      <h1>PREVIEW</h1>
      <ani-row>
        <ani-col :col="12">
          <ani-col :col="6">
            <ani-button>BUTTON</ani-button>
            <ani-button circle>CIRCLE</ani-button>
            <div style="background-color:lightseagreen;display: inline-block">
              <ani-button transparent>transparent</ani-button>
            </div>
          </ani-col>
          <ani-col :col="3">
            <ani-switch></ani-switch>
          </ani-col>
          <ani-col :col="3">
            <ani-drop-down blur>
              <ani-button slot="target">dropdown</ani-button>
              <ani-drop-down-item
                v-for="item in 5"
                :key="item"
                :title="`dropdown ${item}`"
              ></ani-drop-down-item>
            </ani-drop-down>
          </ani-col>
          <ani-col :col="12"><div style="height: 20px"></div></ani-col>
          <ani-col :col="2">
            <ani-checkbox checked></ani-checkbox>
          </ani-col>
          <ani-col :col="2">
            <ani-checkbox></ani-checkbox>
          </ani-col>
          <ani-col :col="2">
            <ani-input></ani-input>
          </ani-col>
          <ani-col :col="12">
            <div style="height: 20px"></div>
          </ani-col>
          <ani-col :col="12">
            <ani-input password></ani-input>
          </ani-col>
          <ani-col :col="12">
            <ani-rate :rate.sync="rateNum"></ani-rate>
          </ani-col>
          <ani-col :col="12">
            <ani-router-choose></ani-router-choose>
          </ani-col>
            <ani-col :col="12">
                <ani-color-picker default-color="rgba(255,255,128,0.5)"></ani-color-picker>
            </ani-col>
            <ani-col :col="12">
                <ani-time-now></ani-time-now>
            </ani-col>
            <ani-col :col="12">
                <ani-parallax height="400" :image="require('../assets/parallax-1.webp')">
                    <div class="main-view-parallax__text">
                        <h1>Ani UI</h1>
                        <h2>Animate component for vue.js 2.0</h2>
                    </div>
                </ani-parallax>
            </ani-col>
            <ani-col :col="12">
                <ani-weather type="sunny"></ani-weather>
            </ani-col>
            <ani-col :col="12">
                <ani-weather type="rain"></ani-weather>
            </ani-col>
        </ani-col>

        <ani-col :col="12">
          <ani-pager :all-page="50" :current-page.sync="pageNumber"></ani-pager>
        </ani-col>
        <ani-col :col="12">
          <ani-counter :step="20" v-model="number"></ani-counter>
        </ani-col>
        <ani-col :col="12">
          <ani-card style="background-color:deepskyblue;">
            <ani-cloud seed="1" animation></ani-cloud>
          </ani-card>
        </ani-col>
        <!-- the Cloud -->
        <ani-col :col="6">
          <ani-clock></ani-clock>
        </ani-col>
      </ani-row>
    </div>
  </div>
</template>

<script>
import AniButton from "../components/AniButton";
import AniBottomBar from "../components/AniBottomBar";
import AniBottomBarItem from "../components/AniBottomBarItem";
import AniRow from "../components/Row/src/AniRow";
import AniCol from "../components/Col/src/AniCol";
import AniClock from "../components/AniClock";
import AniCloud from "../components/AniCloud";
import AniSwitch from "../components/AniSwitch";
import AniCheckbox from "../components/AniCheckbox";
import AniInput from "../components/AniInput";
import AniCard from "../components/AniCard";
import AniDropDown from "../components/AniDropDown";
import AniDropDownItem from "../components/AniDropDownItem";
import AniFloatButton from "../components/AniFloatButton/src/AniFloatButton";
import AniPager from "../components/AniPager";
import AniRate from "../components/AniRate";
import AniRouterChoose from "../components/AniRouterChoose";
import AniCounter from "../components/AniCounter";
import AniTimeNow from "../components/AniTimeNow";
import AniWeather from "../components/AniWeather";
import AniColorPicker from "../components/AniColorPicker";
import AniParallax from "../components/AniParallax";
export default {
  name: "Preview",
  components: {
    AniButton,
    AniBottomBarItem,
    AniBottomBar,
    AniCol,
    AniRow,
    AniClock,
    AniCloud,
    AniSwitch,
    AniInput,
    AniCard,
    AniCheckbox,
    AniDropDown,
    AniDropDownItem,
    AniFloatButton,
    AniPager,
    AniRate,
    AniRouterChoose,
    AniCounter,
    AniTimeNow,
    AniWeather,
    AniColorPicker,
      AniParallax
  },
  data() {
    return {
      pageNumber: 10,
      rateNum: 4
    };
  }
};
</script>

<style scoped></style>
