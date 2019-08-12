<template>
  <div>
    <span>{{ dateResult }}</span>
  </div>
</template>

<script>
import dateFormat from "dateformat";
export default {
  name: "AniTimeNow",
    props:{
      format:String,
    },
  mounted() {
    this.timer = setInterval(() => {
      this.data = new Date();
      this.dateResult = dateFormat(this.data,this.format);
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  data() {
    return {
      timer: null,
      date: null,
      second: 0,
      dateResult: dateFormat(this.data,this.format)
    };
  }
};
</script>

<style scoped></style>
