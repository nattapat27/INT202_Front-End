
import Vue from 'vue'
import Vuex from 'vuex'
import { checkoutPreference } from './store/checkoutPreference'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    checkoutPreference
  }
})
