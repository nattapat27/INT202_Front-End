<template>
  <v-footer
    dark
    height="50">
    <v-layout justify-space-around>
    <v-card class="flex" flat tile >
      <v-card-title class="teal">
         <v-avatar  size="80">
          <router-link to="/">
            <v-btn fab  flat big @click="setIsShowMainHeader(true)" >
               <img   src="@/assets/Logo1.png"  alt="LOGO" aria-setsize="1px">
            </v-btn>
          </router-link>
        </v-avatar>

        <v-spacer></v-spacer>
       <p v-if="getUserDetail != null">
         <br>
         {{getUserDetail.username}}</p>
        <router-link to="/login">
        <v-btn fab dark small color="indigo">
            <v-icon dark>account_circle</v-icon>
        </v-btn>
       </router-link>
      </v-card-title>
    </v-card>
    </v-layout>
  </v-footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['setIsShowMainHeader'])
  },
  computed: {
    ...mapGetters(['getUserDetail'])
  },
  mounted () {
    this.setIsShowMainHeader(false)
  }
}
</script>
