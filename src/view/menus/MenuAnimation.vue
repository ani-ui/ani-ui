<template>
    <div style="width: 90%">
        <h1>动画效果</h1>
        <ani-card>
            <ani-button @click="handleClickFade">fade 开启/关闭</ani-button>
            <div style="width: 100px;height: 100px">
               <transition name="fade">
                   <ani-card v-if="fadeEffect" style="background-color:dodgerblue;"></ani-card>
               </transition>
            </div>
        </ani-card>
    </div>
</template>

<script>
    import AniCard from "../../components/AniCard";
    import AniButton from "../../components/AniButton";
    export default {
        name: "MenuAnimation",
        components:{
            AniCard,AniButton
        },
        data(){
            return {
                fadeEffect:false,
            }
        },

        methods: {
            handleClickFade() {
                this.fadeEffect=!this.fadeEffect
            }
        }
    }
</script>

<style scoped>

</style>
