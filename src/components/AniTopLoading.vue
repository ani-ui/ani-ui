<template>
    <div class="ani-top-loading--style" :style="`width: ${animatePercentage}%;`"></div>
</template>

<script>
    import {TweenLite,Power3} from 'gsap'
    export default {
        name: "AniTopLoading",
        props:{
            percentage:Number,
        },
        mounted(){
            this.animatePercentage=this.percentage
        },
        data(){
            return {
                animatePercentage:0,
            }
        },
        watch:{
            percentage(value){
                TweenLite.to(this.$data,0.7,{animatePercentage:value,ease:Power3.easeInOut})
            },
        }
    }
</script>

<style >
    .ani-top-loading--style {
        position: fixed;
        top: 0;
        left: 0;
        height: 10px;
        background-color: rgba(0,0,0,0.5);
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);

    }
</style>
