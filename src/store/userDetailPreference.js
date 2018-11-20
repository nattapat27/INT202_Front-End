export const userDetailPreference = {
  state: {
    userDetail: null,
    jwtToken: ''
  },
  actions: {
    setUserDetail: function ({ commit }, userDetail) {
      console.log(userDetail)
      commit('setUserDetail', userDetail)
    },
    setJwtToken: function ({ commit }, jwtToken) {
      commit('setJwtToken', jwtToken)
    }
  },
  mutations: {
    setUserDetail: function (state, userDetail) {
      console.log(userDetail)
      state.userDetail = userDetail
    },
    setJwtToken: function (state, jwtToken) {
      state.jwtToken = jwtToken
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
