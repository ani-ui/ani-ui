<template>
    <div class="ani-top-loading--style" :style="`width: ${animatePercentage}%;`">
        <transition name="fade">
            <div v-if="animatePercentage!==100" class="ani-top-loading__infinity__style">
                <div class="ani-top-loading-dot__style"></div>
            </div>
        </transition>
    </div>
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

    .ani-top-loading__infinity__style {
        position: fixed;
        top: 29px;
        right: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        border: 5px solid rgba(0,0,0,0.8);
        animation: .5s infinity-round infinite;
    }
    @keyframes infinity-round {
        from{
            transform:rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }

    .ani-top-loading-dot__style {
        position: absolute;
        top: 0;
        left: 0;
        background-color: white;
        width: 5px;
        height: 5px;
        border-radius: 5px;
    }
</style>
