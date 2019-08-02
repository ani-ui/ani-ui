<template>
    <ani-card :title="title">
        <slot></slot>
        <ani-code-block>
            <div>
                <prism-editor
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
            code:String,
            js:String
        }
    }
</script>

<style scoped>

</style>