export const checkoutPreference = {
    state:{
        isShowMainHeader: true
    },
    actions: {
        setIsShowMainHeader: function({commit},isShowMainHeader){
            commit('setIsShowMainHeader',isShowMainHeader)

        }
    },
    mutations: {
        setIsShowMainHeader: function (state,isShowMainHeader){
            state.isShowMainHeader = isShowMainHeader
        }
    },
    getters: {
        getIsShowMainHeader: function (state){
            return state.isShowMainHeader
        }
        
    }
}