<template>
    <div style="width: 70%">
        <h1>消息通知</h1>
        <ani-button @click="handleMakeMsg">产生一条消息</ani-button>
    </div>
</template>

<script>
    import mountMixin from "../component/mixin";
    import AniButton from "../../components/AniButton";
    export default {
        name: "MenuMessage",
        components:{AniButton},
        methods: {
            handleMakeMsg() {
                this.$message()
            }
        },
        mixins:[mountMixin],
    }
</script>

<style scoped>

</style>