import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.use(BootstrapVue)

window.fbAsyncInit = function () {
  FB.init({
    appId: '181377309410246',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v3.2'
  })
};

(function (d, s, id) {
  var js; var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) { return }
  js = d.createElement(s); js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
