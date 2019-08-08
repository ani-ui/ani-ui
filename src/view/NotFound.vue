<template>
  <div class="not-found-style" style="width: 95%;height: 50%">
    <ani-card>
        <div style="height: 100px;width: 100px" @click="handleBackHome">
            <ani-card>
                <i class="material-icons">home</i>
            </ani-card>
        </div>
      <h1 style="margin-top: 10%">404 NOT FOUND</h1>
    </ani-card>
  </div>
</template>

<script>
import AniCard from "../components/AniCard";
export default {
  name: "NotFound",
  components: { AniCard },
    methods: {
        handleBackHome() {
            this.$router.push('/')
        }
    }
};
</script>

<style scoped>
.not-found-style {
  height: 90%;
}
</style>
