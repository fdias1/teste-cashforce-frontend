<template>
    <div class="home-container">
        <img class="home-logo" src="../assets/logo-nome.png" alt="">
        <h1 class="home-title">Bem-vindo ao CashForce</h1>
        <p>Utilize o menu ao lado para navegar pelo site.</p>
    </div>
</template>
<script>
    export default {
        name:'Home',
    }
</script>

<style>
    .home-container{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        grid-area:content;
        padding:22px 48px;
        border-top: 1px #DFE2EB solid;
        padding:50px;
    }
    .home-title{
        margin:30px;
    }
</style>