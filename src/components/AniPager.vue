<template>
  <div class="ani-pager-main__style">
    <ul>
      <li @click="handlePageDown(firstArrow)">
        <div class="ani-pager-li-style">
          <i class="material-icons">keyboard_arrow_left</i>
        </div>
      </li>
      <li @click="handleClickLi(1)">
        <div
          :class="
            1 === currentPage
              ? 'ani-pager-li-style__active'
              : 'ani-pager-li-style'
          "
        >
          1
        </div>
      </li>
      <li v-if="leftMore">
        <div class="ani-pager-li-style">
          <i class="material-icons">more_horiz</i>
        </div>
      </li>
      <li
        v-for="item in displayPage"
        :key="`Math.random().toFixed(3)${item}`"
        @click="handleClickLi(item)"
      >
        <div
          :class="
            item === currentPage
              ? 'ani-pager-li-style__active'
              : 'ani-pager-li-style'
          "
        >
          {{ item }}
        </div>
      </li>
      <li v-if="rightMore">
        <div class="ani-pager-li-style">
          <i class="material-icons">more_horiz</i>
        </div>
      </li>
      <li @click="handleClickLi(allPage)">
        <div
          :class="
            allPage === currentPage
              ? 'ani-pager-li-style__active'
              : 'ani-pager-li-style'
          "
        >
          {{ allPage }}
        </div>
      </li>
      <li @click="handlePageUp(lastArrow)">
        <div class="ani-pager-li-style">
          <i class="material-icons">keyboard_arrow_right</i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AniPager",
  props: {
    allPage: Number,
    currentPage: Number
  },
  mounted() {
    if (this.allPage <= 10) {
      this.rightMore = false;
    }
    if(this.currentPage>=6)this.leftMore=true
    if(this.allPage-this.currentPage<=5)this.rightMore=false
  },
  computed: {
    firstArrow() {
      return this.currentPage !== 1;
    },
    lastArrow() {
      return this.currentPage !== this.allPage;
    },
    displayPage() {
      let array = [];
      if (this.allPage <= 10) {
        for (let i = 2; i < this.allPage; i++) {
          array.push(i);
        }
      } else if (this.currentPage < 5) {
        for (let i = 2; i < 10; i++) {
          array.push(i);
        }
      } else if (this.currentPage === 5) {
        for (let i = 2; i < 10; i++) {
          array.push(i);
        }
      } else if (this.currentPage > 5 && this.currentPage < this.allPage - 5) {
        for (let i = this.currentPage - 3; i < this.currentPage + 4; i++) {
          array.push(i);
        }
      } else if (this.allPage - this.currentPage === 5) {
        for (let i = this.currentPage - 3; i < this.currentPage + 4; i++) {
          array.push(i);
        }
      } else if (this.allPage - this.currentPage < 5) {
        for (let i = this.allPage - 8; i < this.allPage; i++) {
          array.push(i);
        }
      }
      return array;
    }
  },
  watch: {
    currentPage(value) {
      if (this.allPage > 10) {
        this.leftMore = value > 5;
        this.rightMore = value < this.allPage - 4;
      } else {
        this.rightMore = false;
      }
    }
  },
  methods: {
    handleClickLi(item) {
      this.$emit("update:currentPage", item);
    },
    handlePageUp(bool) {
      if (bool) {
        this.emit("update:currentPage", this.currentPage++);
      }
    },
    handlePageDown(bool) {
      if (bool) {
        this.emit("update:currentPage", this.currentPage--);
      }
    }
  },
  data() {
    return {
      leftMore: false,
      rightMore: true
    };
  }
};
</script>

<style scoped>
.ani-pager-main__style ul li {
  display: inline-block;
  user-select: none;
}

.ani-pager-li-style {
  height: 35px;
  width: 35px;
  margin-right: 8px;
  position: relative;
  line-height: 35px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 500ms;
  border-radius: 6px;
}
.ani-pager-li-style__active {
  height: 35px;
  width: 35px;
  margin-right: 8px;
  position: relative;
  line-height: 35px;
  text-align: center;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 500ms;
}
.ani-pager-li-style__active:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}
.ani-pager-li-style__active:active {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
}
.ani-pager-li-style:hover {
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}
.ani-pager-li-style:active {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}
</style>
