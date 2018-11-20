<template>
  <v-app>
    <v-content>
      <!-- <v-btn color="rgb(51,102,204)" @click="loginFacebook()" style="color:white">Login Facebook ที่หน้าตาสวยที่สุดในโลกโดยซัน</v-btn> -->
    </v-content>

      <div class="LoginLeft">
        <center><img class="Logo" src="../assets/Logo1.png" alt="Logo"></center>
           <!-- <v-img  :src ="item.src" >

           </v-img> -->
      </div>

      <div class="LoginRight" >
      </div>

  </v-app>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  // พื้นฐานของวิวที่มีไว้เก็บทุกหน้า
  name: 'Login',
  components: {

  },
  computed: {
    ...mapGetters(['getUserDetail', 'getJwtToken'])
  },
  data () {
    return {
      userDetail: {}
      // item:[
      //   {
      //     src: '../assets/Logo1.png'
      //   }
      // ]

    }
  },
  mounted () {
    this.hideAnyHeaderWhenOnLoginPage()
  },
  beforeRouteLeave (to, from, next) {
    this.showHeaderAfterExitLoginPage()
  },
  methods: {
    ...mapActions(['setUserDetail', 'setJwtToken', 'setIsShowUserHeader', 'setIsShowMainHeader']),
    loginFacebook: function () {
      FB.login((response) => {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ')
          FB.api('/me?fields=id,name,email', (response) => {
            console.log('Good to see you, ' + response.name + '.')
            console.log(response)
            this.userDetail = response
            this.setUserDetail(response)
            axios.post(process.env.VUE_APP_BACKEND_SERVICE + '/user/login')
          })
        } else {
          console.log('User cancelled login or did not fully authorize.')
        }
      })
    },
    hideAnyHeaderWhenOnLoginPage: function(){
      this.setIsShowUserHeader(false)
      this.setIsShowMainHeader(false)
    },
    showHeaderAfterExitLoginPage: function(){
      this.setIsShowUserHeader(true)
      this.setIsShowMainHeader(true)
    }
  }
}
</script>

<style>
.LoginLeft{
  background-color: #5670BA;
  width: 50%;
  height: 100%;
  position: absolute;

}

.LoginRight{
  background-color: #8BC8BC;
  width: 100%;
  height: 100%;

}

.Logo{
  margin-top: 15%;

}
</style>
