<template>
    <div style="width: 90%">
        <h1>ani-tooltip 提示</h1>
        <card-code-display>
            <ani-tooltip>
                <ani-button>提示</ani-button>
            </ani-tooltip>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniTooltip from "../../components/AniTooltip";
    import AniButton from "../../components/AniButton";
    export default {
        name: "MenuTooltip",
        components: {AniTooltip, CardCodeDisplay,AniButton}
    }
</script>

<style scoped>

</style>
