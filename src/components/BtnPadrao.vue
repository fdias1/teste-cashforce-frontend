<template>
    <div class="button">
        <p class="button-label">
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
    name:'BtnPadrao'
}
</script>

<style>
    .button{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 165px;
        height: 32px;
        border: 1px solid #CAD3FF;
        box-sizing: border-box;
        border-radius: 16px;
        cursor:pointer;
        transition:200ms;
        text-transform: none;

    }
    .button-label{
        font-size: 12px;
        line-height: 16px;
        color: #727D94;
        font-weight: bold;
    }
    .button:hover{
        background-color: #727D9433;
    }
</style>