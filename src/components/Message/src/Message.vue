<template>
  <transition name="fade">
    <div class="ani-message-style">
      <span>Test</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Message"
};
</script>

<style scoped>
.ani-message-style {
  height: 100px;
  width: 400px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 30px rgba(0,0,0,0.3);
  z-index: 1000;
  position: fixed;
  top: 50px;
  right: 50px;
  animation: fade-simple 3s;
}
/*
//TODO THIS ANIMATION ONLY FOR TEST
*/
  @keyframes fade-simple {
    from{
      opacity: 0;
      transform: translateX(400px);
    }
    33%,66%{
      opacity: 1;
      transform: translateX(0);
    }

    to{
      opacity: 0;
      transform: translateX(400px);
    }
  }
</style>
