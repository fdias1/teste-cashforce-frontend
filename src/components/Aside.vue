<template>
<div class="aside side-shadow">

    <AsideBtn page="home" iconFileName='home.svg'>
        Home
    </AsideBtn>

    <AsideBtn page="orders" iconFileName='deal.svg'>
        Notas fiscais
    </AsideBtn>

</div>
</template>

<script>
    import AsideBtn from './AsideBtn'
    
    export default {
        name:'Aside',
        components:{
            AsideBtn
        },
    }
</script>

<style>
    .aside {
        grid-area: aside;
        display:flex;
        align-items: flex-start;
        justify-content: flex-start;
        background-color: #FBFDFE;
        flex-direction: column;
    }
</style>