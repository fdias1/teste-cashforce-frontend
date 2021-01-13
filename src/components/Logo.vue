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
        background-color: #FBFDFE;
        -webkit-box-shadow: inset -30px 0px 30px -30px rgba(221,221,221,1);
        -moz-box-shadow: inset -30px 0px 30px -30px rgba(221,221,221,1);
        box-shadow: inset -30px 0px 30px -30px rgba(221,221,221,1);
    }
    img {
        width: 160px;
        height: auto;
    }
</style>