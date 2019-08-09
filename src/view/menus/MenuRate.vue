<template>
    <div style="width: 90%">
        <h1>ani-rate 评分栏</h1>
        <card-code-display :code="codeRate" :js="codeJs">
            <ani-rate :rate.sync="rateNum"></ani-rate>
            {{ rateNum }} Star
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniRate from "../../components/AniRate";
    export default {
        name: "MenuRate",
        components: {AniRate, CardCodeDisplay},
        data(){
            return {
                rateNum:3,
                codeRate:`<ani-rate :rate.sync="rateNum"></ani-rate>`,
                codeJs: `data(){
        return {
            rateNum:3,
        }
    },`
            }
        },
    }

</script>

<style scoped>

</style>
