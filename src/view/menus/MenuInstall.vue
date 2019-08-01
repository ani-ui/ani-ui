<template>
    <div>
        <h1>安装</h1>
        <h2>通过 npm 或 yarn 安装 </h2>
        <p>
            <prism-editor :code="codeNpm" language="shell"></prism-editor>
            <prism-editor :code="codeYarn" language="shell"></prism-editor>
        </p>

        <h2>通过 CDN 安装 </h2>
        <p>
            <prism-editor :code="codeCss" language="markup"></prism-editor>
            <prism-editor :code="codeScript" language="markup"></prism-editor>
        </p>

    </div>
</template>

<script>

    import "prismjs";
    import "prismjs/themes/prism.css";
    import PrismEditor from "vue-prism-editor";
    export default {
        name: "MenuInstall",
        components:{
            PrismEditor
        },
        data(){
            return {
                codeNpm:`npm install ani-ui@latest`,
                codeYarn:`yarn add ani-ui@latest`,
                codeCss:`<link rel="stylesheet" href="https://unpkg.com/ani-ui/dist/ani-ui.css">`,
                codeScript:`<script src="https://unpkg.com/ani-ui/dist/ani-ui.common.js"/>`
            }
        },
    }
</script>

<style scoped>

</style>