import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'

import NotasFiscais from './components/NotasFiscais'
Vue.use(vueRouter)
Vue.config.productionTip = false

const router = new vueRouter({
  routes:[
    {
      path:'/notas',
      component:NotasFiscais
    },
    {
      path:'/',
      redirect:'/notas'
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
