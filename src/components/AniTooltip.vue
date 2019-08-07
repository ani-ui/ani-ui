<template>
  <div @mousemove="handleMouseEnter" @mouseleave="handleMouseLeave">
    <slot></slot>
    <transition name="fade">
        <div v-show="visible" :id="customID" class="ani-tooltip-style-main">
            <span>{{ content }}</span>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AniTooltip",
  mounted() {
    let vthis = this;
    async function waitSetDone() {
      vthis.customID =
        await ((Math.random() * 200).toFixed(0).toString() +
            Date.now().toString());
    }
    waitSetDone().then(() => {
       //let tooltipDiv=document.getElementById(vthis.customID)
    });
  },
  data() {
    return {
      customID: "",
      clientX: 0,
      clientY: 0,
        visible:false
    };
  },
    props:{
      content:String,
    },
  methods: {
    handleMouseEnter(e) {
        this.visible=true
        let tooltipDiv=document.getElementById(this.customID).style
        tooltipDiv.top=`${(e.clientY+5).toString()}px`
        tooltipDiv.left=`${(e.clientX+5).toString()}px`
    },
      handleMouseLeave() {
        this.visible=false
      }
  }
};
</script>

<style scoped>
.ani-tooltip-style-main {
  height: 30px;
    line-height: 30px;
  background-color: rgba(0,0,0,0.8);
    padding: 0 10px;
    border-radius: 5px;
  position: fixed;
    color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
</style>
