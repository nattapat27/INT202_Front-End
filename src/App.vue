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
import Confirmation from './components/Checkout/Confirmation'
import Payment from './components/Checkout/Payment'
import ProductDetailTable from './components/Checkout/ProductDetailTable'
import OrderSummary from './components/Checkout/OrderSummary'
import { mapGetters } from 'vuex'

export default {
  // พื้นฐานของวิวที่มีไว้เก็บทุกหน้า
  name: 'App',
  components: {
    Delivery,
    Mainheader,
    HeaderUser,
    Confirmation,
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
  mounted () {

  },
  methods: {

  }
}
</script>
