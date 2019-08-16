<template>
    <div style="width: 90%">
        <h1>ani-fancy-loading 炫酷加载</h1>
        <card-code-display title="基础使用">
            <ani-fancy-loading name="rec"></ani-fancy-loading>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniFancyLoading from "../../components/AniFancyLoading";
    export default {
        name: "MenuFancyLoading",
        components: {AniFancyLoading, CardCodeDisplay}
    }
</script>

<style scoped>

</style>
