<template>
    <div class="ani-pager-main__style">
        <ul >
            <li>@</li>
            <li>@</li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "AniPager",
        props:{
            allPage:Number,
            currentPage:Number,
        }
    }
</script>

<style scoped>
    .ani-pager-main__style ul li {
        display: inline;
    }
</style>
