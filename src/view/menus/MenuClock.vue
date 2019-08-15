<template>
    <div style="width: 90%">
        <h1>ani-clock 模拟时钟</h1>
        <card-code-display title="基础使用">
            <ani-clock></ani-clock>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniClock from "../../components/AniClock";
    export default {
        name: "MenuClock",
        components: {AniClock, CardCodeDisplay}
    }
</script>

<style scoped>

</style>
