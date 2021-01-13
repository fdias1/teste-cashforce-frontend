<template>
        <img :style="`width:${tamanho}px;`" src="spinner.gif" alt="">
</template>

<script>
export default {
    name:'Spinner',
    props:[
        'tamanho'
    ]
}
</script>

<style>
</style>