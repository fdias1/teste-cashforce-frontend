<template>
<div class="aside">
    <asideBtn iconFileName='deal.svg' active>Notas fiscais</asideBtn>
</div>
</template>

<script>
    import AsideBtn from './AsideBtn'
    
    export default {
        name:'Aside',
        components:{
            AsideBtn
    }
}
</script>

<style>
    .aside {
        grid-area: aside;
        display:flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
</style>