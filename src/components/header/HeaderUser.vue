<template>
  <v-footer
    dark
    height="50">
    <v-card class="flex" flat tile >
      <v-card-title class="teal">
         <v-avatar  size="80">
          <router-link to="/">
            <v-btn fab  flat big @click="setIsShowMainHeader(true)"  >
               <img  v-if="getUserDetail == null" src="@/assets/Logo1.png"  alt="LOGO" aria-setsize="1px">
               <p v-else>{{getUserDetail.username}}</p>
            </v-btn>
          </router-link>
        </v-avatar>

        <v-spacer></v-spacer>
      <router-link to="/login">
        <v-btn fab dark small color="indigo">
            <v-icon dark>account_circle</v-icon>
        </v-btn>
      </router-link>
      </v-card-title>
    </v-card>
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
