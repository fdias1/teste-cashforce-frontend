<template>
    <tr>
        <td>{{notaFiscal.orderNumber}}</td>
        <td>{{notaFiscal.buyerName}}</td>
        <td>{{notaFiscal.provider.name}}</td>
        <td>{{dataEmissao}}</td>
        <td class="green">{{valor}}</td>
        <td class="green">{{notaFiscal.orderStatusBuyerLabel}}</td>
        <td> 
            <div class="button-cell">  
                <BtnPadrao :action="() => showProvider({...notaFiscal.provider,endereco})">Dados do cedente</BtnPadrao>
                <InfoCedente :provider="currentProvider" v-if="showProviderBox" :close="() => showProviderBox=false"></InfoCedente>
            </div>
        </td>
    </tr>
</template>

<script>
import BtnPadrao from './BtnPadrao'
import InfoCedente from './InfoCedente'

export default {
    name:'NotaFiscal',
    components:{
        BtnPadrao,
        InfoCedente,
    },
    props:[
        'notaFiscal'
    ],
    methods:{
        showProvider(provider) {
            this.showProviderBox=true;
            this.currentProvider = provider
        }
    },
    data:function() {
        return {
            showProviderBox:false,
            currentProvider:{}
        }
    },
    computed:{
        dataEmissao() {
            return new Date(this.notaFiscal.emissionDate).toLocaleDateString()
        },
        valor() {
            return 'R$ '+parseFloat(this.notaFiscal.value)
                .toFixed(2)
                .replace('.',',')
                .replace(/(\d)(?=(\d{3})+,)/g, '$1.')
        },
        endereco:function() {
            if (!this.notaFiscal.provider.address) return null
            return (
                this.notaFiscal.provider.address+
                ', '+
                this.notaFiscal.provider.number+
                ', '+
                this.notaFiscal.provider.complement+
                ', '+
                this.notaFiscal.provider.neighborhood+
                ', '+
                this.notaFiscal.provider.postalCode+
                ', '+
                this.notaFiscal.provider.city+
                '/'+
                this.notaFiscal.provider.state
            )
        },
    }
}
</script>

<style>
    tr{
        border: 1px solid #DFE2EB;
        border-radius: 20px;
        padding: 7px 30px;
    }

    td{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color:#4D5566;
        text-transform: uppercase;
        padding: 7px 30px;
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