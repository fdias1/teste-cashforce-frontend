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
      name:'home',
      path:'/home',
      component:Home
    },
    {
      name:'orders',
      path:'/orders',
      component:NotasFiscais
    },
    {
      path:"*",
      redirect:'home'
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
