import Vue from 'vue'
import Router from 'vue-router'
import socialSecuPay from '../views/socialSecuPay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'socialSecuPay',
      component: socialSecuPay
    }
  ]
})
