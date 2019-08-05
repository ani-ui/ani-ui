<template>
    <div style="width: 90%;">
        <h1>安装</h1>
        <h2>通过 npm 或 yarn 安装 </h2>
        <div >
           <ani-card>
                   <prism-editor :code="codeNpm" language="shell"></prism-editor>
                   <prism-editor :code="codeYarn" language="shell"></prism-editor>
           </ani-card>
        </div>
        <h2>通过 CDN 安装 </h2>
        <div>
            <ani-card>
                    <prism-editor :code="codeCss" language="markup"></prism-editor>
                    <prism-editor :code="codeScript" language="markup"></prism-editor>
            </ani-card>
        </div>

        <div style="height: 1000px"></div>
    </div>
</template>

<script>

    import "prismjs";
    import "prismjs/themes/prism.css";
    import PrismEditor from "vue-prism-editor";
    import AniCard from "../../components/AniCard";
    export default {
        name: "MenuInstall",
        components:{
            AniCard,
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