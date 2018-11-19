export const headerPreference = {
  state: {
    isShowMainHeader: true,
    isShowUserHeader: true
  },
  actions: {
    setIsShowMainHeader: function ({ commit }, isShowMainHeader) {
      commit('setIsShowMainHeader', isShowMainHeader)
    },
    setIsShowUserHeader: function ({ commit }, isShowUserHeader) {
      commit('setIsShowUserHeader', isShowUserHeader)
    }
  },
  mutations: {
    setIsShowMainHeader: function (state, isShowMainHeader) {
      state.isShowMainHeader = isShowMainHeader
    },
    setIsShowUserHeader: function (state, isShowUserHeader) {
      state.isShowUserHeader = isShowUserHeader
    }
  },
  getters: {
    getIsShowMainHeader: function (state) {
      return state.isShowMainHeader
    },
    getIsShowUserHeader: function (state) {
      return state.getIsShowUserHeader
    }

  }
}
