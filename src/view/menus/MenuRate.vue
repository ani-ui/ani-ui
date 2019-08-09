<template>
    <div style="width: 90%">
        <h1>ani-rate 评分栏</h1>
        <card-code-display>
            <ani-rate :rate.sync="rateNum"></ani-rate>
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
                rateNum:3
            }
        },
    }
</script>

<style scoped>

</style>
