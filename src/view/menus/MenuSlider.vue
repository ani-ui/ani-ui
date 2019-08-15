<template>
    <div style="width: 90%">
        <h1>ani-slider 滑动条</h1>
        <card-code-display title="基础使用" :code="code">
            <ani-slider v-model="sliderValue"></ani-slider>
            <h1>{{ sliderValue }}</h1>
        </card-code-display>
        <api-docs>
            <api-child :value="apiChildren"></api-child>
        </api-docs>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniSlider from "../../components/AniSlider";
    import ApiDocs from "../component/ApiDocs";
    import ApiChild from "../component/ApiChild";
    export default {
        name: "MenuSlider",
        components: {ApiChild, ApiDocs, AniSlider, CardCodeDisplay},
        data(){
            return {
                sliderValue:0,
                apiChildren: [
                    {
                        name: "*v-model",
                        type: "Number",
                        value: "1,2,3...",
                        describe: "数值"
                    },
                ],
                code:` <ani-slider v-model="sliderValue"></ani-slider>`
            }
        },
    }
</script>

<style scoped>

</style>
