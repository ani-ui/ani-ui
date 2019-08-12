<template>
    <div style="width: 90%">
        <h1>ani-input 输入框</h1>
        <card-code-display title="基础使用" :code="`<input>`">
            <ani-input></ani-input>
        </card-code-display>
        <card-code-display title="密码" :code="`<input>`">
            <ani-input password></ani-input>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniInput from "../../components/AniInput";
    export default {
        name: "MenuInput",
        components: {AniInput, CardCodeDisplay}
    }
</script>

<style scoped>

</style>
