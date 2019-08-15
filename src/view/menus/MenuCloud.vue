<template>
    <div style="width: 90%">
        <h1>ani-cloud 模拟云</h1>
        <card-code-display title="基础使用" :code="code">
           <div style="width: 100%;height: 270px;background-color:#76ebff;">
               <div style="">
                   <ani-cloud :seed="10" animation></ani-cloud>
               </div>
           </div>
        </card-code-display>
        <api-docs>
            <api-child :value="apiChildren"></api-child>
        </api-docs>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniCloud from "../../components/AniCloud";
    import ApiDocs from "../component/ApiDocs";
    import ApiChild from "../component/ApiChild";
    export default {
        name: "MenuCloud",
        components: {ApiChild, ApiDocs, AniCloud, CardCodeDisplay},
        data(){
            return{
                apiChildren: [
                    {
                        name: "seed",
                        type: "Number(integer)",
                        value: "1,2,3...",
                        describe: "种子"
                    },
                    {
                        name: "animation",
                        type: "Boolean",
                        value: "true/false",
                        describe: "动画显示"
                    },
                ],
                code:` <ani-cloud :seed="10" animation></ani-cloud>`
            }
        },
    }
</script>

<style >

</style>
