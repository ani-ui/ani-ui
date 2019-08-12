<template>
    <div style="width: 90%">
        <h1>ani-time-now 即时时间</h1>
        <h4>ani-time-now 是对dateformat的一个封装</h4>
        <card-code-display title="基础使用" :code="code">
            <ani-time-now format="yyyy.mm.dd hh:MM:ss"></ani-time-now>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniTimeNow from "../../components/AniTimeNow";
    export default {
        name: "MenuTimeNow",
        components: {AniTimeNow, CardCodeDisplay},
        data: function () {
            return {code:`<ani-time-now format="yyyy.mm.dd hh:MM:ss"></ani-time-now>`}
        }
    }
</script>

<style scoped>

</style>
