<template>
    <div>
        <slot></slot>
        <div :id="customID" class="ani-tooltip-style-main"></div>
    </div>
</template>

<script>
    export default {
        name: "AniTooltip",
        mounted(){
            this.customID=(Math.random()*200).toFixed(0).toString()+Date.now().toString();
            window.console.log(this.customID)
            setTimeout(()=>{
                window.console.log(document.getElementById(this.customID))
            },100)
        },
        data(){
            return {
                customID:'',
            }
        },
    }
</script>

<style scoped>
    .ani-tooltip-style-main {
        height: 50px;width: 40px;background-color:rgba(0,0,0,0.5);
        position: fixed;
    }
</style>
