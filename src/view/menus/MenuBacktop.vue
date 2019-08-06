<template>
    <div style="width: 90%">
        <h1>ani-back-top 回到顶部</h1>
        <card-code-display title="基础使用">

        </card-code-display>
    </div>
</template>

<script>
    import mountMixin from "../component/mixin";
    import CardCodeDisplay from "../component/CardCodeDisplay";

    export default {
        name: "MenuBacktop",
        components: {CardCodeDisplay},
        mixins:[mountMixin],
    }
</script>

<style scoped>

</style>
