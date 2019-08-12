<template>
    <div style="width: 90%">
        <card-code-display title="基础使用">
            <ani-carousel :current.sync="current">
                <ani-carousel-item :index="0">
                    <div style="height: 100%;width: 100%;background-color:pink;"></div>
                </ani-carousel-item>
                <ani-carousel-item :index="1">
                    <div style="height: 100%;width: 100%;background-color:lightseagreen;"></div>
                </ani-carousel-item>
                <ani-carousel-item :index="2">
                    <div style="height: 100%;width: 100%;background-color:yellowgreen;"></div>
                </ani-carousel-item>
                <ani-carousel-item :index="3">
                    <div style="height: 100%;width: 100%;background-color:dodgerblue;"></div>
                </ani-carousel-item>
            </ani-carousel>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniCarousel from "../../components/AniCarousel";
    import AniCarouselItem from "../../components/AniCarouselItem";
    export default {
        name: "MenuCarousel",
        components: {AniCarouselItem, CardCodeDisplay,AniCarousel},
        data(){
            return {
                current:0
            }
        },
        methods: {
            handleClick() {
                this.current++
            }
        }
    }
</script>

<style scoped>

</style>
