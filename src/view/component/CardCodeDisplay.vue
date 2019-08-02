<template>
    <ani-card :title="title">
        <slot></slot>
        <ani-code-block>
            <prism-editor
                    :code="code"
                    language="markup"
            ></prism-editor>
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
            code:String
        }
    }
</script>

<style scoped>

</style>