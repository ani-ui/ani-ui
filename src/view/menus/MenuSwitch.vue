<template>
    <div style="width: 90%">
        <h1>ani-switch 开关</h1>
        <card-code-display :code="codeSwitch" :js="codeSwitchJs">
            <ani-switch v-model="switchValue"></ani-switch>
            <span>{{ switchValue}}</span>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniSwitch from "../../components/AniSwitch";
    export default {
        name: "MenuSwitch",
        components: {AniSwitch, CardCodeDisplay},
        data(){
            return {
                switchValue:false,
                codeSwitch:`<ani-switch v-model="switchValue"></ani-switch>`,
                codeSwitchJs:`data(){
    return {
        switchValue:false,
    }
},`
            }
        },
    }
</script>

<style scoped>

</style>
