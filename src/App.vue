<template>
  <v-app>

    <br>
    <br>
    <mainheader v-show="getIsShowMainHeader"/>
    <!-- <delivery/> -->
    <router-view> </router-view>
    <br>
    <br>

    <!-- // <show-cart/>
    // <show-product-all/>  -->
    <br>
    <br>

    <ShowProductAll/>

    <br>
    <br>

  </v-app>

</template>

<script>
import Delivery from "./components/Delivery";
import Mainheader from "./components/Mainheader";
import CarouselBanner from "./components/CarouselBanner";
import ShowProductAll from "./components/ShowProductAll";
import ShowCart from "./components/ShowCart";
import { mapGetters } from 'vuex';


export default {
  // พื้นฐานของวิวที่มีไว้เก็บทุกหน้า
  name: 'App',
  components: {
    Delivery,
    Mainheader,
    CarouselBanner,
    ShowProductAll,
    ShowCart
  },
  computed: {
    ...mapGetters(['getIsShowMainHeader'])
  }
}
</script>
