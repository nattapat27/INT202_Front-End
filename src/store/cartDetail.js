import axios from 'axios'
export const cartDetail = {
  state: {
    cart: {},
    order: {}
  },
  actions: {
    addProductToCart: async function ({ commit }, order) {
      console.log('--- กดนำของเข้าตระกร้า ----')
      console.log(order)
      console.log(order.userId)
      console.log(order.productId)
      let cart = await axios.post(`${process.env.VUE_APP_BACKEND_SERVICE}/cart/${order.userId}?product_id=${order.productId}`)
      console.log(cart)
      commit('setCart', cart)
    },
    fetchOrderFromUser: async function ({ commit }, userId) {
      let order = await axios.get(`${process.env.VUE_APP_BACKEND_SERVICE}/cart/${userId}`)
      commit('setOrder', order.data)
    }
  },
  mutations: {
    setCart: function (state, cart) {
      console.log('mutation set cart')
      state.cart = cart
    },
    setOrder: function (state, order) {
      console.log('set orrder')
      console.log(order)
      state.order = order
    }
  },
  getters: {
    getCart: function (state) {
      return state.cart
    },
    getOrder: function (state) {
      return state.order
    }
  }
}
