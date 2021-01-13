<template>
    <div class="container">
        <div class="header">
            <div class="content-title">
                <img class="content-icon" src="icons/deal_blue.svg" alt="icon">
                <div class="content-label">Notas fiscais</div>
            </div>
            <div class="content-subtitle">
                Visualize as notas fiscais que você tem.
            </div>
        </div>
        <table v-show="!showSpinner">
            <thead>
                <th>Nota Fiscal</th>
                <th>Sacado</th>
                <th>Cedente</th>
                <th>Emissão</th>
                <th>Valor</th>
                <th>Status</th>
                <th></th>
            </thead>
            <tbody>
                <template v-for="notaFiscal in notasFiscais">
                    <tr class="spacer" :key="`${notaFiscal.id}-spacer`"></tr>
                    <NotaFiscal :key="notaFiscal.id" :notaFiscal="notaFiscal"></NotaFiscal>
                </template>
            </tbody>
        </table>
        <div class="spinner-container" v-show="showSpinner">
            <Spinner  tamalho="100"></Spinner>
        </div>
    </div>
</template>
<script>
    import NotaFiscal from './NotaFiscal'
    import api from '../services/api'
    import Spinner from './Spinner'

    export default {
        components:{
            NotaFiscal,
            Spinner
        },
        name:'NotasFiscais',
        data:function() {
            return {
                notasFiscais:[],
                showSpinner:true,
                }
        },
        async beforeMount(){
            try {
                const orders = await api.get('orders')
                const notasFiscais = orders.data.retorno
                this.notasFiscais = notasFiscais
                this.showSpinner=false
            } catch (err) {
                alert('Algo deu errado, tente novamente mais tarde')
                this.showSpinner=false
            }
        }
    }
</script>

<style>
    .container{
        display:flex;
        flex-direction: column;
        grid-area:content;
        padding:22px 48px;
        border-top: 1px #DFE2EB solid;
    }

    .header{
        display:flex;
        flex-direction:column;
        margin-bottom:19px;
    }

    .content-title{
        display:flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        padding-bottom:5px;
    }
    
    .content-icon{
        width: 24px;
    }

    .content-label{
        font-weight: 700;
        font-size: 24px;
        margin-left: 9px;
        color:#021B51;
    }

    .content-subtitle{
        color:#727D94;
        font-size: 14px;
    }

    .spinner-container {
        width: 100%;
        height: 100%;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    table {
        padding:0;
        border-collapse: collapse;
        white-space: nowrap;
    }

    th{
        padding: 3px 30px
    }

    thead {
        text-align: left;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        color: #A1A8B8;
        padding: 19px 30px 30px 0;
    }

    tr.spacer{
        height: 16px;
        margin:0;
        padding:0;
        display:block;
        border:none;
    }
</style>