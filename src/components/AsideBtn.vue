<template>
  <div class="aside-btn" :class="{active}" @click="$emit('selectPage',label)">
      <img :src="`${publicPath}icons/${iconFileName}`" alt="icon" class="icon">
      <div class="label"><slot></slot></div>
  </div>
</template>

<script>
export default {
    name:'Aside',
    props:{
        active: { type:Boolean},
        label:{},
        iconFileName:{}
    },
    methods:{
        click() {
            // 
            console.log('click')
        }
    },
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style>
    .aside-btn {
        width: 288px;
        height: 64px;
        display: flex;
        background-color:transparent;
        flex-direction: row;
        padding-left: 21px;
        border-left:transparent solid 4px;
        transition:200ms;
        cursor:pointer;
    }

    .icon {
        width: 24px;
    }

    .label {
        color:#00AD8C;
        display:flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 15px;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
    }

    .active {
        border-left: #00AD8C solid 4px;
    }

    .aside-btn:hover{
        background-color: #727D9433;
    }
</style>