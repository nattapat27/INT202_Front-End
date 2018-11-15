import Vue from 'vue'
import Router from 'vue-router'
import CheckoutProduct from './views/CheckoutProduct.vue'
import ShippingStatus from './views/ShippingStatus.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/checkoutproduct',
      name: 'checkout-product',
      component: CheckoutProduct
    },
    {
      path: '/shippingstatus',
      name: 'shipping-status',
      component: ShippingStatus
    }
    // },
    // {
    //   path: '/Home',
    //   name: 'HomePage',
    //   component: ShippingStatus
    // }
  ]
})
