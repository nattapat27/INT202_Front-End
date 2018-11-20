
import Vue from 'vue'
import Vuex from 'vuex'
import { headerPreference } from './store/headerPreference'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    headerPreference
  }
})
