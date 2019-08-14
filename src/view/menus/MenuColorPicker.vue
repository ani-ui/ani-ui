<template>
    <div style="width: 90%">
        <h1>ani-color-picker 拾色器</h1>
        <card-code-display>
            <ani-color-picker></ani-color-picker>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniColorPicker from "../../components/AniColorPicker";
    export default {
        name: "MenuColorPicker",
        components: {AniColorPicker, CardCodeDisplay}
    }
</script>

<style scoped>

</style>
