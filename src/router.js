import Vue from 'vue'
import Router from 'vue-router'
import CheckoutProduct from './views/CheckoutProduct.vue'
// import ShippingStatus from './views/ShippingStatus.vue'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./components/ShowProductAll.vue')
    },
    {
      path: '/product/:productId',
      name: 'product-detail',
      component: () => import('./views/ProductDetail.vue')
    },
    {
      path: '/checkoutproduct',
      name: 'checkout-product',
      component: CheckoutProduct
    }
    // },
    // {
    //   path: '/shippingstatus',
    //   name: 'shipping-status',
    //   component: ShippingStatus
    // }
    // },

  ]
})
