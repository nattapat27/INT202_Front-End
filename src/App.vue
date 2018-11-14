<template>
  <v-app>

    <br>
    <br>
    <mainheader/>
    <delivery/>
    <router-view> </router-view>
    <br>
    <br>

    <show-cart/>
    <!-- <show-product-all/> -->
    <br>
    <br>
  
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
import {mapGetters, mapActions} from 'vuex';

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

  methods: {
    ...mapActions(['setCurentCheckoutStatus'])
  },
  computed: {
    ...mapGetters(['getCurrentCheckoutStatus'])
  }
}
</script>
