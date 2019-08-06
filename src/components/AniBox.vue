<template>
    <div class="ani-box-main-style">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "AniBox"
    }
</script>

<style scoped>
    .ani-box-main-style {
        border-radius: 10px;
        border: 1px solid rgba(0,0,0,0.2);
        padding: 5px;
    }
</style>
