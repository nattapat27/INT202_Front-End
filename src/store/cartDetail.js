import axios from 'axios'
export const cartDetail = {
  state: {
    cart: {}
  },
  actions: {
    addProductToCart: async function ({ commit }, productId) {
      let userId = 1
      let cart = await axios.get(`${process.env.VUE_APP_BACKEND_SERVICE}/cart/${userId}?product_id=${productId}`)
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
