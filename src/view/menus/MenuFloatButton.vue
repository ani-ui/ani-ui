<template>
    <div style="width: 90%">
        <h1>ani-float-button 浮动按钮</h1>
        <ani-float-button></ani-float-button>
        <div style="height:2000px"></div>
    </div>
</template>

<script>
    import AniFloatButton from "../../components/AniFloatButton/index";
    import mountMixin from "../component/mixin";
    export default {
        name: "MenuFloatButton",
        components:{
            AniFloatButton
        },
        mixins:[mountMixin],
    }
</script>

<style scoped>

</style>