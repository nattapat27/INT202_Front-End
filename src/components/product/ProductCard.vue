<template>
    <v-hover>
    <v-card
      slot-scope="{ hover }"  class="mx-auto"  color="grey lighten-4"  width="344">
      <v-img  :src ="product.image"  aspect="1.7" >
        <v-expand-transition >
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
         <p> {{product.price}} </p>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-4"  style="position: relative;">
        <v-icon>mdi-cart</v-icon>
        <div class="font-weight-light grey--text title mb-2">{{product.category}}</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">{{product.productName}}</h3>
        <div class="font-weight-light title mb-2">
          {{product.description}}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  // พื้นฐานของวิวที่มีไว้เก็บทุกหน้า
  name: 'ProductCard',
  props: {
    product: {}
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
