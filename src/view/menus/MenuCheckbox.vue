<template>
    <div style="width: 90%">
        <h1>ani-checkbox 选框</h1>
        <card-code-display>
            <ani-checkbox v-model="checkboxValue"></ani-checkbox>
            <span>{{ checkboxValue }}</span>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniCheckbox from "../../components/AniCheckbox";
    export default {
        name: "MenuCheckbox",
        components: {AniCheckbox, CardCodeDisplay},
        data(){
            return {
                checkboxValue:false,
            }
        },
    }
</script>

<style scoped>

</style>
