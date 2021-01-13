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
        <table>
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
                <NotaFiscal></NotaFiscal>
                <tr class="spacer"></tr>
                <NotaFiscal></NotaFiscal>
                <tr class="spacer"></tr>
                <NotaFiscal></NotaFiscal>
                <tr class="spacer"></tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import NotaFiscal from './NotaFiscal'
    
    export default {
        components:{
            NotaFiscal,
        },
        name:'NotasFiscais'
    }
</script>

<style>
    .cedente{
        position:absolute;
        top:30%;
        left:30%;
        width: 40%;
        height: 40%;
        background-color: #dd334444;
    }
    .container{
        max-width: 1300px;
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

    table {
        padding:0;
        border-collapse: collapse;
          border-spacing: 0 1em;
    }

    th{
        padding:16px
    }

    thead {
        text-align: left;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        color: #A1A8B8;
        padding:16px
    }

    tr.spacer{
        height: 16px;
        margin:0;
        padding:0;
        display:block;
        border:none;
    }
</style>