<template>
    <div>
        <h1>ani-button 按钮</h1>
        <h2>基础使用</h2>
        <ani-button>按钮</ani-button>
        <prism-editor :code="codeButton" language="markup"></prism-editor>
    </div>
</template>

<script>
    import "prismjs";
    import "prismjs/themes/prism.css";
    import PrismEditor from "vue-prism-editor";
    import AniButton from "../../components/AniButton";
    export default {
        name: "MenuButton",
        components: { AniButton ,PrismEditor},

        data: function () {
            return {codeButton: '<ani-button>按钮</ani-button>'}
        }
    }
</script>

<style scoped>

</style>