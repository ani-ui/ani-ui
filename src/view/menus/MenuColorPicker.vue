<template>
    <div style="width: 90%">
        <h1>ani-color-picker 拾色器</h1>
        <card-code-display title="基础使用" :code="code">
            <ani-color-picker :default-color.sync="colors"></ani-color-picker>
            <span>{{ colors }}</span>
        </card-code-display>
        <api-docs>
            <api-child :value="apiChildren"></api-child>
        </api-docs>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniColorPicker from "../../components/AniColorPicker";
    import ApiDocs from "../component/ApiDocs";
    import ApiChild from "../component/ApiChild";
    export default {
        name: "MenuColorPicker",
        components: {ApiChild, ApiDocs, AniColorPicker, CardCodeDisplay},
        data(){
            return {
                colors:`rgba(255,255,255,0.9)`,
                apiChildren: [
                    {
                        name: "defaultColor.sync",
                        type: "String",
                        value: "rgba(255,255,255,1)",
                        describe: "颜色(暂仅支持rgba)"
                    },
                ],
                code:`<ani-color-picker :default-color.sync="colors"></ani-color-picker>`
            }
        },
    }
</script>

<style scoped>

</style>
