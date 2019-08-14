<template>
    <div style="width: 90%">
        <h1>ani-cloud 模拟云</h1>
        <card-code-display>
            <ani-cloud></ani-cloud>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniCloud from "../../components/AniCloud";
    export default {
        name: "MenuCloud",
        components: {AniCloud, CardCodeDisplay}
    }
</script>

<style scoped>

</style>
