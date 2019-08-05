<template>
    <div :class="`ani-col-${col}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "AniCol",
        props:{
            col:Number,
        }
    }
</script>

<style scoped>

</style>