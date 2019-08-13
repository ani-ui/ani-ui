<template>
    <div style="width: 90%">
        <h1>ani-tag</h1>
        <card-code-display title="基础使用">
            <ani-tag tag="标签1"></ani-tag>
        </card-code-display>
        <card-code-display title="可移除">
            <ani-tag tag="标签2" removable></ani-tag>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniTag from "../../components/AniTag";
    export default {
        name: "MenuTag",
        components: {AniTag, CardCodeDisplay}
    }
</script>

<style scoped>

</style>
