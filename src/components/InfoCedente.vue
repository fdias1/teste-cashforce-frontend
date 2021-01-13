<template>
    <div class="blur-bg" @click="close">
        <div class="floating-box" @click="(e) => e.stopPropagation()">
            <div class="floating-box-header" @click="close"><img src="icons/close.svg" alt="Fechar" class="close-icon"></div>
            <div class="floating-box-content">
                <div class="provider-info-container">
                    <div class="provider-info-title">Informações gerais:</div>
                    <div class="provider-info-row"><span class="provider-info-label">Razão social: </span><span class="provider-info">{{provider.name || 'não informado'}}</span></div>
                    <div class="provider-info-row"><span class="provider-info-label">Nome Fantasia: </span><span class="provider-info">{{provider.tradingName || 'não informado'}}</span></div>
                    <div class="provider-info-row"><span class="provider-info-label">CNPJ: </span><span class="provider-info">{{provider.cnpj || 'não informado'}}</span></div>
                    <div class="provider-info-row"><span class="provider-info-label">Site: </span><span class="provider-info">{{provider.website || 'não informado'}}</span></div>
                    <div class="provider-info-row"><span class="provider-info-label">Endereço: </span><span class="provider-info">{{provider.endereco || 'não informado'}}</span></div>
                </div>
                <div class="provider-info-container">
                    <div class="provider-info-title">Responsável:</div>
                    <div class="provider-info-row"><span class="provider-info-label">Contato: </span><span class="provider-info">{{provider.responsibleName || 'não informado'}}</span></div>
                    <div class="provider-info-row"><span class="provider-info-label">E-mail: </span><span class="provider-info">{{provider.responsibleEmail || 'não informado'}}</span></div>
                    <div class="provider-info-row"><span class="provider-info-label">Cargo: </span><span class="provider-info">{{provider.responsiblePosition || 'não informado'}}</span></div>
                    <div class="provider-info-row"><span class="provider-info-label">Telefone: </span><span class="provider-info">{{provider.responsiblePhone || 'não informado'}}</span></div>
                    <div class="provider-info-row"><span class="provider-info-label">Celular: </span><span class="provider-info">{{provider.responsibleMobile || 'não informado'}}</span></div>
                </div>          
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'InfoCedente',
    props:[
        'provider',
        'close'
    ]
}
</script>

<style>
    .blur-bg{
        position:fixed;
        display:flex;
        align-items:center;
        justify-content: center;
        top:0px;
        left:0px;
        width: 100vw;
        height:100vh;
        background-color: #00000055;
    }
    .floating-box{
        z-index:1000;
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 90%;
        max-width: 770px;
        background-color:#fff;
        padding:20px;
        border: 1px solid #CAD3FF;
        border-radius:16px;
        -webkit-box-shadow: 10px 10px 35px -15px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 35px -15px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 35px -15px rgba(0,0,0,0.75);
    }
    .floating-box-header {
        display:flex;
        flex-direction: row-reverse;
        width: 100%;
    }

    .close-icon{
        width: 20px;
        cursor: pointer;
    }

    .floating-box-content{
        display:flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        padding:20px;
    }

    .provider-info-container {
        margin-right: 40px;
        width: 300px;
    }
    .provider-info-title{
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color:#4D5566;
        text-transform: uppercase;
        margin-bottom:10px;
    }

    .provider-info-label{
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        color: #A1A8B8;
    }
    .provider-info {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        color:#4D5566;
    }
</style>