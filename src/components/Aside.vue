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
        background-color: #FBFDFE;
        -webkit-box-shadow: inset -30px 0px 30px -30px rgba(221,221,221,1);
        -moz-box-shadow: inset -30px 0px 30px -30px rgba(221,221,221,1);
        box-shadow: inset -30px 0px 30px -30px rgba(221,221,221,1);

    }
</style>