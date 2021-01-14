<template> 
    <div class="logo side-shadow">
        <Router-link to="/home">
            <img src="../assets/logo-nome.png" alt="CashForce">
        </Router-link>
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
    }
    img {
        width: 160px;
        height: auto;
    }
</style>