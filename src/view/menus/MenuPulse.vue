<template>
    <div style="width: 90%">
        <h1>ani-pulse 脉冲</h1>
        <card-code-display title="基础使用">
            <ani-pulse></ani-pulse>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniPulse from "../../components/AniPulse";
    export default {
        name: "MenuPulse",
        components: {AniPulse, CardCodeDisplay}
    }
</script>

<style scoped>

</style>
