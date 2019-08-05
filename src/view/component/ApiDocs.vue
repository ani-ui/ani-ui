<template>
    <div style="width: 100%">
        <h2>API reference</h2>
        <div style="width: 100%;background-color:rgba(0,0,0,0.2);height: 50px">
            <div style="display: inline-block;width: 20%;line-height: 50px">
                <span>名称</span>
            </div>
            <div style="display: inline-block;width: 20%;line-height: 50px">
                <span>类型</span>
            </div>
            <div style="display: inline-block;width: 20%;line-height: 50px">
                <span>值</span>
            </div>
            <div style="display: inline-block;width: 40%;line-height: 50px">
                <span>说明</span>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ApiDocs"
    }
</script>

<style scoped>

</style>