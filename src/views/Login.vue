<template>
  <v-app>
    <!-- <v-content>
      <v-btn color="rgb(51,102,204)" @click="loginFacebook()" style="color:white">Login Facebook ที่หน้าตาสวยที่สุดในโลกโดยซัน</v-btn>
      <v-btn color="rgb(51,102,204)" @click="checkLoginState()" style="color:white">status</v-btn>
      <v-btn color="rgb(51,102,204)" @click="logoutFacebook()" style="color:white">logout facebook</v-btn>
    </v-content> -->
      <div class="LoginLeft">
        <center><img class="Logo" src="../assets/Logo1.png" alt="Logo"></center>
      </div>

      <div class="LoginRight">
          <div class="str" >
             <h1 style="margin-bottom:50px; margin-top:-10%;">LOGIN</h1>
            <v-form>
            <v-text-field
              v-model="username"
              label="Username"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              required
            ></v-text-field>
  <br>
    <b-form-checkbox value="Remember">Remember Me</b-form-checkbox>
    <button type="button" style="margin-top:-10%;" class="btn btn-link-primary" id="ForgetPassword">Forget Password?</button>
  </v-form>
  <button type="button" class="btn btn-warning btn-lg btn-block" style="margin-left:10px" >Login</button>
  
  <button type="button" class="btn btn-link-warning " style="margin-left:1px" >Not Resgister?   SIGN UP</button>
  
  <br>
   <hr style="margin-top:130px">
          </div>
          <div class="btn">
          <v-btn class="ClickToFacebook" color="rgb(51,102,204)" @click="loginFacebook()" style="color:white; margin-left:-50%">เข้าสู่ระบบด้วย Facebook</v-btn>
          </div>
      </div>
  </v-app>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  // พื้นฐานของวิวที่มีไว้เก็บทุกหน้า
  name: "Login",
  components: {

  },
  computed: {
    ...mapGetters(["getUserDetail", "getJwtToken"])
  },
  data () {
    return {
      checkbox: true,
      username: '',
      password: ''
    }
  },
  mounted () {
    this.hideAnyHeaderWhenOnLoginPage()
  },
  beforeRouteLeave (to, from, next) {
    this.showHeaderAfterExitLoginPage()
    next()
  },
  methods: {
    ...mapActions(['setUserDetail', 'setJwtToken', 'setIsShowUserHeader', 'setIsShowMainHeader']),
    loginFacebook: function () {
      FB.login((response) => {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ')
          FB.api('/me?fields=id,name,email', (response) => {
            console.log(response)
            this.userDetail = response
            this.setUserDetail(response)
            axios.post(process.env.VUE_APP_BACKEND_SERVICE + '/user/login')
            this.$router.push('/')
          })
        } else {
          console.log('User cancelled login or did not fully authorize.')
        }
      })
    },
    logoutFacebook: function() {
      FB.logout((logoutResponse) => {
        console.log(logoutResponse)
      });
    },
    checkLoginState: function () {
      FB.getLoginStatus((response) => {
        console.log('status')
        console.log(response)
      });
    },
    hideAnyHeaderWhenOnLoginPage: function () {
      this.setIsShowUserHeader(false)
      this.setIsShowMainHeader(false)
    },
    showHeaderAfterExitLoginPage: function () {
      this.setIsShowUserHeader(true)
      this.setIsShowMainHeader(true)
    }
  }
};
</script>

<style>


.line {
  font-size: 20px;
  float: left;
  font-family: sans-serif;
  margin-right: 20px;
}
.str {
  margin-left: 57%;
  margin-top: 6%;
  float: left;
  color: aliceblue;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.btn {
  float: left;
  margin-left: 65%;
  margin-top: 10px;
}
.LoginLeft {
  background-color: #5670ba;
  width: 50%;
  height: 100%;
  position: absolute;

}

.LoginRight {
  background-color: #8bc8bc;
  width: 100%;
  height: 100%;
}

.Logo {
  margin-top: 15%;

}

.ClickToFacebook{
  border-radius: 5%;
}


</style>
