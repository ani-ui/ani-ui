<template>
  <button class="ani-counter-main-style">
    <div
      class="ani-counter-left-right ani-counter-left-style"
      @click="handleClickAdd"
    >
      <i class="material-icons" style="margin-top: 5px">
        add
      </i>
    </div>
    <div class="ani-counter-mid-style">
      {{ animateNumber.toFixed(0) }}
    </div>
    <div
      class="ani-counter-left-right ani-counter-right-style"
      @click="handleClickSub"
    >
      <i class="material-icons" style="margin-top: 5px">
        remove
      </i>
    </div>
  </button>
</template>

<script>
import { TweenLite, Power3 } from "gsap";
export default {
  name: "AniCounter",
  model: {
    prop: "number",
    event: "change"
  },
  props: {
    number: Number,
    step: Number
  },
  data() {
    return {
      animateNumber: this.number
    };
  },
  watch: {
    number(value) {
      if (this.realStep === 1) {
        TweenLite.to(this.$data, 0, {
          animateNumber: value,
          ease: Power3.easeInOut
        });
      } else if (this.realStep < 5) {
        TweenLite.to(this.$data, 0.5, {
          animateNumber: value,
          ease: Power3.easeInOut
        });
      } else
        TweenLite.to(this.$data, 1, {
          animateNumber: value,
          ease: Power3.easeInOut
        });
    }
  },
  computed: {
    realStep() {
      return this.step ? this.step : 1;
    }
  },
  methods: {
    handleClickAdd() {
      this.$emit("change", this.number + this.realStep);
    },
    handleClickSub() {
      this.$emit("change", this.number - this.realStep);
      console.log(this.number);
    }
  }
};
</script>

<style scoped>
.ani-counter-main-style {
  outline: none;
  width: 120px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: white;
  position: relative;
  transition: all 500ms;
  tab-index: 0;
}
.ani-counter-main-style:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.ani-counter-main-style:focus {
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.ani-counter-left-right {
  height: 35px;
  width: 35px;
  position: absolute;
}
.ani-counter-left-right:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.ani-counter-left-right:active {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.ani-counter-left-style {
  left: 0;
  top: 0;
  transition: all 500ms;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
}

.ani-counter-right-style {
  right: 0;
  top: 0;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 500ms;
}
.ani-counter-mid-style {
  width: 46px;
  height: 35px;
  line-height: 33px;
  position: absolute;
  top: 0;
  left: 36px;
}
</style>
