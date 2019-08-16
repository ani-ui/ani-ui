<template>
  <div style="position: relative">
    <div
      @mouseenter="handleMouseEnter(item)"
      @click="handleClickStar(item)"
      class="ani-rate-base-block"
      v-for="item in 5"
      :key="`${Math.random().toFixed(3)}rate${item}`"
    >
      <div
        class="ani-rate-star-back-style"
        :style="
          `box-shadow: 0 0 10px ${
            item <= rate ? 'rgba(255,165,0,0.5);' : 'rgba(0,0,0,0.5);'
          }`
        "
      ></div>
      <div class="ani-rate-star-svg">
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          :fill="item <= rate ? 'orange' : 'none'"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.47553 1.08156L9.5451 4.37336C9.74591 4.99139 10.3218 5.40983 10.9717 5.40983H14.4329C14.9172 5.40983 15.1186 6.02964 14.7268 6.31434L11.9266 8.34878C11.4009 8.73075 11.1809 9.4078 11.3817 10.0258L12.4513 13.3176C12.6009 13.7783 12.0737 14.1613 11.6818 13.8766L8.88168 11.8422C8.35595 11.4602 7.64405 11.4602 7.11832 11.8422L4.31815 13.8766C3.9263 14.1613 3.39906 13.7783 3.54873 13.3176L4.6183 10.0258C4.81911 9.4078 4.59913 8.73075 4.07339 8.34878L1.27323 6.31434C0.881369 6.02964 1.08276 5.40983 1.56712 5.40983H5.02832C5.67816 5.40983 6.25409 4.99139 6.4549 4.37336L7.52447 1.08156C7.67415 0.620903 8.32585 0.620903 8.47553 1.08156Z"
            :stroke="item <= rate ? 'orange' : '#6d6d6d'"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AniRate",
  methods: {
    handleClickStar(item) {
      this.$emit("update:rate", item);
    }
  },
  props: {
    rate: Number
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
.ani-rate-base-block {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 5px;
  transition: all 500ms;
  position: relative;
}
.ani-rate-base-block:hover {
  transform: scale(1.2);
}
.ani-rate-base-block:active {
  transform: scale(0.9);
}

.ani-rate-star-back-style {
  position: absolute;
  height: 10px;
  width: 10px;
  left: 3px;
  top: 3px;
  border-radius: 10px;
  background-color: transparent;
  z-index: 1;
}

.ani-rate-star-svg {
  position: absolute;
  z-index: 2;
}
</style>
