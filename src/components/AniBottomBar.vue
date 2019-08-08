<template>
    <div class="ani-bottom-bar-style" :style="blur?`background-color: rgba(0,0,0,0.3);backdrop-filter: blur(${blur}px);`:''">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "AniBottomBar",
        props:{
            blur:Number
        }
    }
</script>

<style scoped>
    .ani-bottom-bar-style {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 64px;
        background-color: white;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }
</style>
