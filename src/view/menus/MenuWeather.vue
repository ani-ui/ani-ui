<template>
    <div style="width: 90%">
        <h1>ani-weather 天气</h1>
        <card-code-display title="基础使用" >
            <div style="background-color:deepskyblue;">
                <ani-weather type="cloudy"></ani-weather>
                <ani-weather type="sunny"></ani-weather>
                <ani-weather type="rain"></ani-weather>
                <ani-weather type="snow"></ani-weather>
            </div>
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
