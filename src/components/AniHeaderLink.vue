<template>
  <router-link v-if="router" :to="{ name: link }">
    <div class="ani-header-link">
      <slot></slot>
    </div>
  </router-link>
  <a v-else :href="link">
    <div class="ani-header-link">
      <slot></slot>
    </div>
  </a>
</template>

<script>
export default {
  name: "AniHeaderLink",
  props: {
    link: String,
    router: Boolean
  }
};
</script>

<style>
.ani-header-link {
  height: 64px;
  min-width: 32px;
  line-height: 64px;
  padding: 0 12px;
  font-size: 20px;
  display: table-cell;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  transition: all 500ms;
  text-decoration: none;
}
.ani-header-link:hover {
  background-color: rgba(0, 0, 0, 0.12);
}
.ani-header-link:active {
  background-color: rgba(0, 0, 0, 0.24);
}

.ani-header-link {
  display: inline-block;
}
</style>
