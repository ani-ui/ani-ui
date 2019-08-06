<template>
    <div style="width: 90%">
        <card-code-display title="基础使用">
            <ani-box >
                <div style="height: 100px;width: 100px">
                    MenuBox
                </div>
            </ani-box>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniBox from "../../components/AniBox";
    export default {
        name: "MenuBox",
        components: {CardCodeDisplay,AniBox}
    }
</script>

<style scoped>

</style>
