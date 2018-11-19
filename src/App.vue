<template>
  <v-app>
    <v-content>
      <HeaderUser/>
    
    <mainheader v-show="getIsShowMainHeader"/>
    <!-- <delivery/> -->
    <router-view> </router-view>
    <br>
    <br>

    <!-- <comfirmation/> -->
    <!-- <payment/> -->
     <!-- <show-product-all/> -->
    <br>
    <br>
<br>
    <!-- <ShowProductAll/> -->
    <!-- <Cart/> -->
    <br>
    <br>
    </v-content>
  </v-app>

</template>

<script>
import Delivery from './components/Checkout/Delivery'
import Mainheader from './components/Mainheader'
import HeaderUser from './components/HeaderUser'
import CarouselBanner from './components/CarouselBanner'
import ShowProductAll from './components/ShowProductAll'
import ShowCart from './components/ShowCart'
import Cart from './components/Checkout/Cart'
import Comfirmation from './components/Checkout/Comfirmation'
import Payment from './components/Checkout/Payment'
import { mapGetters } from 'vuex'

export default {
  // พื้นฐานของวิวที่มีไว้เก็บทุกหน้า
  name: 'App',
  components: {
    Delivery,
    Mainheader,
    CarouselBanner,
    ShowProductAll,
    ShowCart,
    HeaderUser,
    Cart,
    Comfirmation,
    Payment
  },
  computed: {
    ...mapGetters(['getIsShowMainHeader'])
  }
}
</script>
