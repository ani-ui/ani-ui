<template>
  <div class="ani-header-style">
    <div class="ani-header-drawer-button">
      <div class="ani-header-button__inner"></div>
    </div>
    <div class="ani-header-title">
      <span>{{ title }}</span>
    </div>
    <div class="ani-header-ops">
      <a :href="item.href" v-for="item in link" :key="item" class="ani-header-link">
        <div class="ani-header-button">
          {{ item.name }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AniHeader",
    props:{
      title:String,
      link:Array
    }
  }
</script>

<style scoped>
  .ani-header-style {
    width: 100%;
    height: 64px;
    box-shadow: 0 5px 20px 0 #00000030;
  }

  .ani-header-title {
    height: 64px;
    float: left;
    display: inline-block;
    margin-left: 16px;
    font-size: 24px;
    line-height: 64px;
  }

  .ani-header-ops {
    float: right;
    height: 64px;
  }

  .ani-header-button {
    height: 64px;
    min-width: 32px;
    line-height: 64px;
    padding: 0 12px;
    font-size: 20px;
    border-left: 1px solid rgba(0,0,0,.12);
    transition: all 500ms;
    text-decoration: none;
  }
  .ani-header-button:hover{
    background-color: rgba(0,0,0,.12);
  }
  .ani-header-button:active{
    background-color: rgba(0,0,0,.24);
  }

  .ani-header-link {
    display: inline-block;
  }

  .ani-header-drawer-button {
    float: left;
    display: inline-block;
    height: 64px;
    width: 64px;

  }

  .ani-header-button__inner {
    height: 32px;
    width: 32px;background-color: pink;
    margin-left: 16px;
    margin-top: 16px;
  }
</style>
