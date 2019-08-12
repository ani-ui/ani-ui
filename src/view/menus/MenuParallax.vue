<template>
    <div style="width: 90%">
        <h1>ani-parallax 视差效果</h1>
        <card-code-display title="基础使用">
            <ani-scroll-bar style="height: 300px">
                <div v-for="item in 5" :key="`parallax${item}`" style="height: 400px">
                    <ani-parallax :height="150" :image="`${require('../../assets/test-image.png')}`"></ani-parallax>
                </div>

            </ani-scroll-bar>
        </card-code-display>
    </div>
</template>

<script>
    import AniScrollBar from "../../components/AniScrollBar";
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniParallax from "../../components/AniParallax";
    export default {
        name: "MenuParallax",
        components: {AniParallax, CardCodeDisplay,AniScrollBar},
        mounted() {
            window.console.log( require('../../assets/test-image.png'))
        }
    }
</script>

<style scoped>

</style>
