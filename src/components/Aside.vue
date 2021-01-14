<template>
<div class="aside">
    <AsideBtn @selectPage="selectPage" 
    page="home" 
    iconFileName='home.svg' 
    :currentPage="currentPage">
    Home</AsideBtn>

    <AsideBtn @selectPage="selectPage" 
    page="orders" 
    iconFileName='deal.svg' 
    :currentPage="currentPage">
    Notas fiscais</AsideBtn>

</div>
</template>

<script>
    import AsideBtn from './AsideBtn'
    
    export default {
        name:'Aside',
        components:{
            AsideBtn
        },
        methods:{
            selectPage(page) {
                this.$router.push(page)
                this.currentPage = page
            }
        },
        data:function() {
            return {
                currentPage:'home'
            }
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
        flex-direction: column;
        -webkit-box-shadow: inset -30px 0px 30px -30px rgba(221,221,221,1);
        -moz-box-shadow: inset -30px 0px 30px -30px rgba(221,221,221,1);
        box-shadow: inset -30px 0px 30px -30px rgba(221,221,221,1);

    }
</style>