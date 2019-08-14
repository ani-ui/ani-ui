<template>
  <div class="ani-slider-main__style" >
    <label>
      <input type="range" class="ani-slider-input__style" v-model.number="sliderValue"/>
    </label>
  </div>
</template>

<script>
export default {
  name: "AniSlider",
  model: {
    prop: "value",
    event: "changeValue"
  },
  props:{
    value:Number
  },
  data(){
    return {
      sliderValue:0,
    }
  },
  watch:{
    sliderValue(value){
      this.$emit('changeValue',value)
    },
  },
  mounted() {
    this.sliderValue=this.value
    window.console.log(typeof this.sliderValue)
  }
};
</script>

<style >
  .ani-slider-input__style {
    width:100%;
    appearance: none;
    outline: 0;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
    border-radius: 20px;
    height: 10px;
  }
  .ani-slider-input__style:focus{
    outline: 0;
  }
  .ani-slider-input__style::-webkit-slider-thumb{
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    transition: all 500ms;
  }
  .ani-slider-input__style::-moz-range-thumb{
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    transition: all 500ms;
  }
  .ani-slider-input__style::-webkit-slider-thumb:hover{
    width: 25px;
    height: 25px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
  }
  .ani-slider-input__style::-moz-range-thumb:hover{
    width: 25px;
    height: 25px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
  }
  .ani-slider-input__style::-webkit-slider-thumb:active{
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    border-radius: 5px;
  }
  .ani-slider-input__style::-moz-range-thumb:active{
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    border-radius: 5px;
  }
  .ani-slider-main__style {
    width: 100%;
  }
</style>
