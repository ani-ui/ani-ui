<template>
    <div class="ani-badge-outter__style">
        <div class="ani-badge-main__style" :class="`ani-badge-main__${type}__style`">
            <span v-if="extra">{{ extra }}</span>
            <span v-if="extraNumber">{{ extraNumber }}</span>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "AniBadge",
        props:{
            type:{
                type:String,
                required:true,
            },
            extra:String,
            extraNumber:Number,
        }
    }
</script>

<style>
    .ani-badge-outter__style {
        display: inline-block;
        position: relative;
    }

    .ani-badge-main__style {
        position: absolute;
        top: 0;
        right: 0;
    }
    .ani-badge-main__dot__style{
        height: 8px;
        width: 8px;
        border-radius: 5px;
        background-color: red;
        z-index: 5;
        transition: all 500ms;
    }
    .ani-badge-main__dash__style{
         height: 16px;
         display: inline-block;
         border-radius: 16px;
         line-height: 16px;
         z-index: 5;
         padding: 0 5px;
         background-color: red;
         color: white;
         transition: all 500ms;
     }
    .ani-badge-main__circle__style{
        height: 16px;
        min-width: 16px;
        padding: 0 3px;
        display: inline-block;
        border-radius: 16px;
        line-height: 16px;
        z-index: 5;
        text-align: center;
        background-color: red;
        color: white;
        transition: all 500ms;
    }
    .ani-badge-outter__style:hover .ani-badge-main__dot__style{
        box-shadow: 0 0 10px red;
    }
    .ani-badge-outter__style:active .ani-badge-main__dot__style,.ani-badge-main__dash__style{
        box-shadow: 0 0 0 rgba(0,0,0,0);
    }
    .ani-badge-outter__style:hover .ani-badge-main__dash__style{
        box-shadow: 0 0 10px red;
    }
    .ani-badge-outter__style:active .ani-badge-main__dash__style{
        box-shadow: 0 0 0 rgba(0,0,0,0);
    }
    .ani-badge-outter__style:hover .ani-badge-main__circle__style{
        box-shadow: 0 0 10px red;
    }
    .ani-badge-outter__style:active .ani-badge-main__circle__style{
        box-shadow: 0 0 0 rgba(0,0,0,0);
    }
</style>
