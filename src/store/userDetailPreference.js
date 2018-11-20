export const userDetailPreference = {
  state: {
    userDetail: {},
    jwtToken: ''
  },
  actions: {
    setUserDetail: function ({ commit }, userDetail) {
      commit('setUserDetail', userDetail)
    },
    setJwtToken: function ({ commit }, jwtToken) {
      commit('setJwtToken', jwtToken)
    }
  },
  mutations: {
    setUserDetail: function (state, userDetail) {
      state.UserDetail = userDetail
    },
    setJwtToken: function ({ commit }, jwtToken) {
      commit('setJwtToken', jwtToken)
    }
  },
  getters: {
    getUserDetail: function (state) {
      return state.userDetail
    },
    getJwtToken: function (state) {
      return state.jwtToken
    }
  }
}
