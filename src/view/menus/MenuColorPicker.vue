<template>
    <div style="width: 90%">
        <h1>ani-color-picker 拾色器</h1>
        <card-code-display>
            <ani-color-picker :default-color.sync="colors"></ani-color-picker>
            <span>{{ colors }}</span>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniColorPicker from "../../components/AniColorPicker";
    export default {
        name: "MenuColorPicker",
        components: {AniColorPicker, CardCodeDisplay},
        data(){
            return {
                colors:`rgba(255,255,255,0.9)`
            }
        },
    }
</script>

<style scoped>

</style>
