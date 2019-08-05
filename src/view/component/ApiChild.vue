<template>
    <div style="width: 100%;height: 50px">
        <div style="display: inline-block;width: 20%;line-height: 50px">
            <span>{{ name }}</span>
        </div>
        <div style="display: inline-block;width: 20%;line-height: 50px">
            <span>{{ type }}</span>
        </div>
        <div style="display: inline-block;width: 20%;line-height: 50px">
            <span>{{ value }}</span>
        </div>
        <div style="display: inline-block;width: 40%;line-height: 50px">
            <span>{{ describe }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ApiChild",
        props:{
            name:String,
            type:String,
            value:String,
            describe:String,
        }
    }
</script>

<style scoped>

</style>