<template>
    <div style="width: 90%">
        <h1>ani-switch 开关</h1>
        <card-code-display>
            <ani-switch></ani-switch>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniSwitch from "../../components/AniSwitch";
    export default {
        name: "MenuSwitch",
        components: {AniSwitch, CardCodeDisplay}
    }
</script>

<style scoped>

</style>
