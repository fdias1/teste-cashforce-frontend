<template>
    <tr>
        <td>1234</td>
        <td>Sacado 001</td>
        <td>Cedente 002</td>
        <td>12/02/2020</td>
        <td class="green">R$ 49.725,00</td>
        <td class="green">Recebido</td>
        <td> 
            <div class="button-cell">  
                <BtnPadrao>Dados do cedente</BtnPadrao>
            </div>
        </td>
    </tr>
</template>

<script>
import BtnPadrao from './BtnPadrao'
export default {
    name:'NotaFiscal',
    components:{
        BtnPadrao,
    }
}
</script>

<style>
    tr{
        border: 1px solid #DFE2EB;
        box-sizing: border-box;
        border-radius: 20px;
        margin:20px;
        padding: 5px 15px;
    }

    td{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color:#4D5566;
        text-transform: uppercase;
        padding: 5px 15px;
    }

    .button-cell {
        display:flex;
        align-items: center;
        justify-content: flex-end;
    }
    .green{
        color: #00AD8C;
    }
</style>