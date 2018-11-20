import Vue from 'vue'
import Vuex from 'vuex'
import { headerPreference } from './store/headerPreference'
import { userDetailPreference } from './store/userDetailPreference'
import { cartDetail } from './store/cartDetail'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    headerPreference,
    userDetailPreference,
    cartDetail
  }
})
