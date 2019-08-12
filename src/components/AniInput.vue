<template>
  <div>
    <label class="ani-input-label-style" style="position: relative;overflow: hidden">
      <input
        class="ani-input-main-style"
        :type="password ? (passwordShow ? 'text' : 'password') : 'text'"
      />
      <div
        v-if="password"
        class="ani-input-password-show-style"
        @click="handleClickLock"
      >
        <i
          class="material-icons ani-input-password-lock-style"
          v-if="!passwordShow"
        >
          lock
        </i>
        <i class="material-icons ani-input-password-lock-style" v-else>
          lock_open
        </i>
      </div>
      <div class="ani-input-prefix-style">
        <slot name="prefix"></slot>
      </div>
      <div v-if="!password" class="ani-input-suffix-style">
        <slot name="suffix"></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "AniInput",
  props: {
    password: Boolean
  },
  data() {
    return {
      passwordShow: false
    };
  },
  methods: {
    handleClickLock() {
      this.passwordShow = !this.passwordShow;
    }
  }
};
</script>

<style scoped>
.ani-input-main-style {
  outline: none;
  border-radius: 5px;
  padding: 5px 30px 5px 30px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 500ms;
}
.ani-input-main-style:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.ani-input-main-style:active {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
.ani-input-main-style:focus {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.ani-input-password-show-style {
  position: absolute;
  right: 1px;
  top: -4px;
  width: 30px;
  border-radius: 5px;
  height: 30px;
  background-color: rgb(240, 240, 240);
  transition: all 500ms;
}

.ani-input-password-lock-style {
  font-size: 20px;
  position: absolute;
  top: 5px;
  left: 5px;
  color: rgb(50, 50, 50);
  transition: all 500ms;
  user-select: none;
}
.ani-input-password-show-style:hover {
  background-color: rgb(100, 100, 100);
}
.ani-input-password-show-style:active {
  background-color: rgb(100, 100, 100);
}
.ani-input-password-show-style:hover .ani-input-password-lock-style {
  color: white;
}
.ani-input-password-show-style:active .ani-input-password-lock-style {
  color: white;
}

.ani-input-prefix-style {
  position: absolute;
  left: 1px;
  top: -4px;
  width: 30px;
  border-radius: 5px;
  height: 30px;
}
.ani-input-suffix-style {
  position: absolute;
  right: 1px;
  top: -4px;
  width: 30px;
  border-radius: 5px;
  height: 30px;
}
</style>
