<template>
    <div style="width: 90%">
        <h1>ani-slider 滑动条</h1>
        <card-code-display title="基础使用">
            <ani-slider v-model="sliderValue"></ani-slider>
            <h1>{{ sliderValue }}</h1>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniSlider from "../../components/AniSlider";
    export default {
        name: "MenuSlider",
        components: {AniSlider, CardCodeDisplay},
        data(){
            return {
                sliderValue:0
            }
        },
    }
</script>

<style scoped>

</style>
