import axios from 'axios'
export const cartDetail = {
  state: {
    cart: {}
  },
  actions: {
    addProductToCart: async function ({ commit }, order) {
      console.log('--- กดนำของเข้าตระกร้า ----')
      console.log(order)
      let cart = await axios.get(`${process.env.VUE_APP_BACKEND_SERVICE}/cart/${order.userId}?product_id=${order.productId}`)
      console.log(cart)
      commit('setCart', cart)
    }
  },
  mutations: {
    setCart: function (state, cart) {
      console.log('mutation set cart')
      state.cart = cart
    }
  },
  getters: {
    getCart: function (state) {
      return state.cart
    }
  }
}
