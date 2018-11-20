<template>
  <v-footer
    dark
    height="50">
    <v-card class="flex" flat tile >
      <v-card-title class="teal">
         <v-avatar  size="80">
          <router-link to="/">
            <v-btn fab  flat big @click="setIsShowMainHeader(true)" >
               <img src="@/assets/Logo1.png"  alt="LOGO" aria-setsize="1px">
            </v-btn>
          </router-link>
        </v-avatar>

        <v-spacer></v-spacer>

      <v-btn fab dark small color="indigo">
          <v-icon dark>account_circle</v-icon>
      </v-btn>

      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['setIsShowMainHeader'])
  },
  mounted () {
    this.setIsShowMainHeader(false)
  }
}
</script>
