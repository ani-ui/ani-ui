<template>
    <ani-card :title="title">
        <div v-if="subtitle" style="line-height:30px;width: 100%;color: rgba(0,0,0,0.7)">
            <span>{{ subtitle }}</span>
        </div>
        <slot></slot>
        <div style="height: 10px"></div>
        <ani-code-block>
            <div>
                <prism-editor
                        readonly
                        :code="code"
                        language="markup"
                ></prism-editor>
                <prism-editor
                        :code="js"
                        language="javascript"
                ></prism-editor>
            </div>
        </ani-code-block>
    </ani-card>
</template>

<script>
    import "prismjs";
    import "prismjs/themes/prism.css";
    import PrismEditor from "vue-prism-editor";
    import AniCard from "../../components/AniCard";
    import AniCodeBlock from "../../components/AniCodeBlock";
    export default {
        name: "CardCodeDisplay",
        components:{AniCodeBlock, AniCard, PrismEditor },
        props:{
            title:String,
            subtitle:String,
            code:String,
            js:String
        }
    }
</script>

<style scoped>

</style>
