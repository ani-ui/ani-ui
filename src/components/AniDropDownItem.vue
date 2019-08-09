<template>
    <div
            class="ani-drop-down-item__style"
            @click="handleRawClick"
    >
        <span>{{ title }}</span>
    </div>
</template>

<script>
    export default {
        name: "AniDropDownItem",
        props:{
            title:String,
        },
        methods: {
            handleRawClick(evt) {
                this.$emit("click",evt)
            }
        }
    }
</script>

<style scoped>
    .ani-drop-down-item__style {
        padding-left: 10px;
        padding-right: 10px;
        height: 30px;
        white-space: nowrap;
        line-height: 30px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        transition: all 500ms;
    }
    .ani-drop-down-item__style:hover{
        background-color: rgba(0, 0, 0, 0.2);
    }
    .ani-drop-down-item__style:active{
        background-color:rgba(0, 0, 0, 0.5);
        color: white;
    }
</style>
