<template> 
    <div class="logo">
        <img src="../assets/logo-nome.png" alt="CashForce">
    </div>
</template>

<script>
    export default {
        name:'Logo'
    }
</script>

<style>
    .logo {
        display:flex;
        align-items: center;
        justify-content: flex-start;
        grid-area: logo;
        padding: 25px 24px;
    }
    img {
        width: 160px;
        height: auto;
    }
</style>