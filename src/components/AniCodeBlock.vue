<template>
    <div>
        <div
                style="overflow-x: auto;overflow-y: auto"
                :style="`height: ${contentHeight}px`">
            <slot></slot>
        </div>
        <div class="ani-code-block--bottom" @click="handleClickShowCode">
            <i class="material-icons ani-show-code-arrow-down" v-if="!isShow">keyboard_arrow_down</i>
            <i class="material-icons ani-show-code-arrow-down" v-else>keyboard_arrow_up</i>
           <span v-if="!isShow" class="ani-show-code-text">显示代码</span>
            <span v-else class="ani-show-code-text">隐藏代码</span>
        </div>
    </div>
</template>

<script>
    import {TweenLite,Power3} from 'gsap'
    export default {
        name: "AniCodeBlock",
        methods: {
            handleClickShowCode() {
                this.isShow=!this.isShow
                if(this.isShow){
                    TweenLite.to(this.$data,0.5,{contentHeight: 150,ease:Power3.easeInOut})
                }else TweenLite.to(this.$data,0.5,{contentHeight: 0,ease:Power3.easeInOut})
            }
        },
        data(){
            return {
                isShow:false,
                contentHeight:0,
            }
        },
    }
</script>

<style scoped>
    .ani-code-block--bottom {
        width: 100%;
        height: 30px;
        color: rgba(0,0,0,.8);
        line-height: 30px;
        text-align: center;
    }
    .ani-show-code-arrow-down{
        transform: translateY(6px) translateX(40px);
        transition: all 500ms;
    }
    .ani-show-code-text{
        display: inline-block;
        transform: translateX(40px);
        opacity: 0;
        transition: all 500ms;
    }
    .ani-code-block--bottom:hover .ani-show-code-arrow-down{
        transform:translateY(6px) translateX(0px);
    }
    .ani-code-block--bottom:hover .ani-show-code-text{
        transform: translateX(0px);
        opacity: 1;
    }

</style>