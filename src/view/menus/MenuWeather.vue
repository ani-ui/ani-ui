<template>
    <div style="width: 90%">
        <h1>ani-weather 天气</h1>
        <card-code-display title="基础使用" :code="code" :js="codeJs">
            <div style="background-color:deepskyblue;">
                <ani-weather :type="weathers[weatherChoose]"></ani-weather>
                <ani-weather type="rain"></ani-weather>
                <ani-button @click="handleClickWeather">NEXT</ani-button>
            </div>
        </card-code-display>
        <api-docs>
            <api-child :value="apiChildren"></api-child>
        </api-docs>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniWeather from "../../components/AniWeather";
    import AniButton from "../../components/AniButton";
    import ApiDocs from "../component/ApiDocs";
    import ApiChild from "../component/ApiChild";
    export default {
        name: "MenuWeather",
        components: {ApiChild, ApiDocs, AniWeather, CardCodeDisplay,AniButton},
        data(){
            return {
                weathers:['cloudy','sunny','rain','snow','hail'],
                weatherChoose:0,
                apiChildren: [
                    {
                        name: "type",
                        type: "String",
                        value: "sunny/rain/cloud/snow/hail",
                        describe: "天气类型"
                    },
                ],
                code:`<ani-weather :type="weathers[weatherChoose]"></ani-weather>`,
                codeJs:`data(){
        return {
            weathers:['cloudy','sunny','rain','snow','hail'],
            weatherChoose:0,
            apiChildren: [
                {
                    name: "type",
                    type: "String",
                    value: "sunny/rain/cloud/snow/hail",
                    describe: "天气类型"
                },
            ],
        }
    },`
            }
        },
        methods: {
            handleClickWeather() {
            if(this.weatherChoose+1<this.weathers.length){
                this.weatherChoose++
            }else this.weatherChoose=0
            }
        }
    }

</script>

<style >

</style>
