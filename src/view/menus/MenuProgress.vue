<template>
    <div style="width: 90%">
        <h1>进度条</h1>
        <card-code-display>
            <ani-progress loading style="margin-left: 20px"></ani-progress>
        </card-code-display>
        <card-code-display>
            <ani-progress loading circle style="margin-left: 20px"></ani-progress>
        </card-code-display>
    </div>
</template>

<script>
    import AniProgress from "../../components/AniProgress";
    import CardCodeDisplay from "../component/CardCodeDisplay";
    export default {
        name: "MenuProgress",
        components: {CardCodeDisplay, AniProgress}
    }
</script>

<style scoped>

</style>
