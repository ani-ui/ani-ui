<template>
    <div style="width: 90%">
        <h1>ani-dialog 对话框</h1>
        <card-code-display>
            <ani-dialog ></ani-dialog>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniDialog from "../../components/AniDialog";
    export default {
        name: "MenuDialog",
        components: {AniDialog, CardCodeDisplay}
    }
</script>

<style scoped>

</style>
