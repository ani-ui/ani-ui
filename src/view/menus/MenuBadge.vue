<template>
    <div style="width: 90%">
        <h1>ani-badge 标记</h1>
        <card-code-display>
            <ani-badge type="dot">
                <ani-button>标记</ani-button>
            </ani-badge>
        </card-code-display>
        <card-code-display>
            <ani-badge type="dash" extra="new">
                <ani-button>Dash</ani-button>
            </ani-badge>
        </card-code-display>
        <card-code-display>
            <ani-badge type="circle" :extra-number="5">
                <ani-button>circle</ani-button>
            </ani-badge>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniBadge from "../../components/AniBadge";
    import AniButton from "../../components/AniButton";
    export default {
        name: "MenuBadge",
        components: {AniBadge, CardCodeDisplay,AniButton}
    }
</script>

<style scoped>

</style>
