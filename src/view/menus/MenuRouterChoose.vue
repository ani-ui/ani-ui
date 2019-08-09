<template>
    <div style="width: 90%">
        <h1>ani-router-choose 路由选择器</h1>
        <card-code-display>
            <ani-router-choose></ani-router-choose>
            <router-link :to="{name:'aaa'}">
                <ani-button>aaa</ani-button>
            </router-link>
            <router-link :to="{name:'bbb'}">
                <ani-button>bbb</ani-button>
            </router-link>
            <div style="height: 100px;width: 200px">
                <router-view></router-view>
            </div>
        </card-code-display>
    </div>
</template>

<script>
    import AniButton from "../../components/AniButton";
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniRouterChoose from "../../components/AniRouterChoose";
    export default {
        name: "MenuRouterChoose",
        components: {AniRouterChoose, CardCodeDisplay,AniButton}
    }
</script>

<style scoped>

</style>
