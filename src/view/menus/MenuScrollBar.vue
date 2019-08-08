<template>
    <div style="width: 90%">
        <h1>ani-scroll-bar 滚动条</h1>
        <card-code-display>
            <ani-scroll-bar style="height: 200px;width: 50%">
                <div>
                    <span>鼠标滚动</span>
                    <div style="height: 1000px"></div>
                    <i class="material-icons">favorite</i>
                </div>
            </ani-scroll-bar>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniScrollBar from "../../components/AniScrollBar";
    export default {
        name: "MenuScrollBar",
        components: {CardCodeDisplay,AniScrollBar}
    }
</script>

<style scoped>

</style>
