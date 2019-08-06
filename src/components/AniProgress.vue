<template>
    <div v-if="type==='loading'" class="ani-progress-loading-style"></div>
    <div v-else-if="type==='circle'">

    </div>
    <div v-else-if="type==='line'">
    </div>
</template>

<script>
    export default {
        name: "AniProgress",
        props:{
            type:String,    // line,loading,circle,
        }
    }
</script>

<style scoped>
    .ani-progress-loading-style {

    }
</style>
