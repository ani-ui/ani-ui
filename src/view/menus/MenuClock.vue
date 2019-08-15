<template>
    <div style="width: 90%">
        <h1>ani-clock 模拟时钟</h1>
        <card-code-display title="基础使用" :code="code">
            <ani-clock></ani-clock>
        </card-code-display>
        <api-docs>
            <api-child :value="apiChildren"></api-child>
        </api-docs>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniClock from "../../components/AniClock";
    import ApiDocs from "../component/ApiDocs";
    import ApiChild from "../component/ApiChild";
    export default {
        name: "MenuClock",
        components: {ApiChild, ApiDocs, AniClock, CardCodeDisplay},
        data(){
            return{
                apiChildren: [
                    {
                        name: "none",
                        type: "",
                        value: "",
                        describe: ""
                    },
                ],
                code:` <ani-clock></ani-clock>`
            }
        },
    }
</script>

<style scoped>

</style>
