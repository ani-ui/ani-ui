<template>
    <div style="width: 90%">
        <h1>ani-pager 分页器</h1>
        <card-code-display title="基础使用" :code="codePager" :js="codePagerJs">
            <ani-pager :all-page="50" :current-page.sync="currentPage"></ani-pager>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniPager from "../../components/AniPager";
    export default {
        name: "MenuPager",
        components: {AniPager, CardCodeDisplay},
        data(){
            return {
                currentPage:10,
                codePager:`<ani-pager :all-page="50" :current-page.sync="currentPage"></ani-pager>`,
                codePagerJs:`data(){
        return {
            currentPage:1,
        }
    },`
            }
        },
    }
</script>

<style >

</style>
