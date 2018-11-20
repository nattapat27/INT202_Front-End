<template>
  <v-app>
    <v-content>
      <HeaderUser v-show="getIsShowUserHeader"/>
      <mainheader v-show="getIsShowMainHeader"/>
      <router-view></router-view>
    </v-content>
  </v-app>

</template>

<script>
import Delivery from './components/Checkout/Delivery'
import Mainheader from './components/header/Mainheader'
import HeaderUser from './components/header/HeaderUser'
import CarouselBanner from './components/CarouselBanner'
import ShowProductAll from './components/ShowProductAll'
import ProductDetail from './views/ProductDetail'
import Comfirmation from './components/Checkout/Comfirmation'
import Payment from './components/Checkout/Payment'
import { mapGetters } from 'vuex'

export default {
  // พื้นฐานของวิวที่มีไว้เก็บทุกหน้า
  name: 'App',
  components: {
    Delivery,
    Mainheader,
    HeaderUser,
    CarouselBanner,
    ShowProductAll,
    ProductDetail,
    Comfirmation,
    Payment
  },
  computed: {
    ...mapGetters(['getIsShowMainHeader', 'getIsShowUserHeader'])
  },
  data () {
    return {
      userDetail: {}
    }
  },
  methods: {

  }
}
</script>
