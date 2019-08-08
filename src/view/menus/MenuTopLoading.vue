<template>
<div style="width: 90%">
    <h1>ani-top-loading 顶部加载条</h1>
    <card-code-display :code="codeTopLoad" :js="codeTopJs">
        <ani-top-loading :percentage="percent"></ani-top-loading>
        <ani-button @click="handleAdd">Add</ani-button>
        <ani-button @click="handleSub">Sub</ani-button>
    </card-code-display>
</div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniTopLoading from "../../components/AniTopLoading";
    import AniButton from "../../components/AniButton";
    export default {
        name: "MenuTopLoading",
        components: {AniTopLoading, CardCodeDisplay,AniButton},
        data(){
            return {
                percent:10,
                codeTopLoad:`<ani-top-loading :percentage="percent"></ani-top-loading>`,
                codeTopJs: ` data(){return {percent:10,}}`
            }
        },
        methods: {
            handleAdd() {
                this.percent+=10
            },
            handleSub() {
                this.percent-=10
            }
        }
    }
</script>

<style scoped>

</style>
