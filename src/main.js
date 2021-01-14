import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'

import NotasFiscais from './pages/NotasFiscais'
import Home from './pages/Home'
Vue.use(vueRouter)
Vue.config.productionTip = false

const router = new vueRouter({
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/orders',
      component:NotasFiscais
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
