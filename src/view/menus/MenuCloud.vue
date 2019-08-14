<template>
    <div style="width: 90%">
        <h1>ani-cloud 模拟云</h1>
        <card-code-display title="基础使用">
           <div style="width: 100%;height: 270px;background-color:#76ebff;">
               <div style="">
                   <ani-cloud seed="10" animation></ani-cloud>
               </div>
           </div>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniCloud from "../../components/AniCloud";
    export default {
        name: "MenuCloud",
        components: {AniCloud, CardCodeDisplay}
    }
</script>

<style scoped>

</style>
