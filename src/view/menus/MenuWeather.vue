<template>
    <div style="width: 90%">
        <h1>ani-weather 天气</h1>
        <card-code-display title="基础使用">
            <ani-weather></ani-weather>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniWeather from "../../components/AniWeather";
    export default {
        name: "MenuWeather",
        components: {AniWeather, CardCodeDisplay}
    }
</script>

<style >

</style>
