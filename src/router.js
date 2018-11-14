import Vue from 'vue'
import Router from 'vue-router'
import CheckoutProduct from './views/CheckoutProduct.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/checkoutproduct',
      name: 'chackout-product',
      component: CheckoutProduct
    }
  ]
})
