<template>
    <div style="width: 90%">
        <h1>ani-pulse 脉冲</h1>
        <card-code-display title="基础使用">
            <ani-pulse width="150px" height="100px" border-radius="10px">
                <ani-button>PULSE</ani-button>
            </ani-pulse>
        </card-code-display>
    </div>
</template>

<script>
    import CardCodeDisplay from "../component/CardCodeDisplay";
    import AniPulse from "../../components/AniPulse";
    import AniButton from "../../components/AniButton";
    export default {
        name: "MenuPulse",
        components: {AniPulse, CardCodeDisplay,AniButton}
    }
</script>

<style scoped>

</style>
