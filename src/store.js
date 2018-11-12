import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: { // ตัวแปรทั้งสถานะที่ระบบจะเห้น
    isCurrentCheckout: true

  },
  mutations: {
    setCurentCheckoutStatus: function (state, status) {
      state.isCurrentCheckout = status
    }
  },
  actions: {
    setCurentCheckoutStatus: function ({ commit }, status) {
      commit('setCurentCheckoutStatus', status)
    }
  },
  getters: {
    getCurrentCheckoutStatus: function (state) {
      return state.isCurrentCheckout
    }
  }
})
