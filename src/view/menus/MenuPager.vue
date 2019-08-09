<template>
    <div style="width: 90%">
        <h1>ani-pager 分页器</h1>
        <card-code-display>
            <ani-pager :all-page="20" :current-page.sync="currentPage"></ani-pager>
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
                currentPage:5,
            }
        },
    }
</script>

<style >

</style>
