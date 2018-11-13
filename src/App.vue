<template>
  <v-app>
    <carousel-banner/>
    <br>
    <br>
    <mainheader/>
<!--
    <router-view> </router-view> -->
    <br>
    <br>

    <br>
    <br>

    <br>
    <br>

  </v-app>

</template>

<script>
import Delivery from './components/Delivery'
import Mainheader from './components/Mainheader'
import CarouselBanner from './components/CarouselBanner'
import Payment from './components/Payment'
import '@mdi/font/css/materialdesignicons.css'
import { mapActions, mapGetters } from 'vuex'

export default {
  // พื้นฐานของวิวที่มีไว้เก็บทุกหน้า
  name: 'App',
  components: {
    Delivery,
    Mainheader,
    CarouselBanner,
    Payment
  },

  methods: {
    ...mapActions(['setCurentCheckoutStatus'])
  },
  computed: {
    ...mapGetters(['getCurrentCheckoutStatus'])
  }
}
</script>
