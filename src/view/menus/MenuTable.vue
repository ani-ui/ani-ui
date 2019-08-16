<template>
    <div style="width: 90%">
        <h1>ani-table 表格</h1>
        <card-code-display>
            <ani-table></ani-table>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniTable from "../../components/AniTable";
    export default {
        name: "MenuTable",
        components: {AniTable, CardCodeDisplay}
    }
</script>

<style scoped>

</style>
