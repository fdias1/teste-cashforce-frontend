<template>
  <div id="app">
    <Logo></Logo>
    <Aside></Aside>
    <NotasFiscais></NotasFiscais>
  </div>
</template>

<script>
  import Logo from './components/Logo'
  import Aside from './components/Aside'
  import NotasFiscais from './components/NotasFiscais'

  export default {
    name: 'App',
    components: {
      Logo,
      Aside,
      NotasFiscais,
    }
  }
</script>

<style>
  #app {
    display:grid;
    grid-template-areas: 
            "logo header"
            "aside content";
    grid-template-columns: 288px 1fr;
    grid-template-rows: 80px 1fr;
  }
</style>
