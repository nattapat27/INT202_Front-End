<template>
    <v-card>
      <br>
      <h1>SHOPPING CART</h1>  
       <v-spacer></v-spacer>
         <v-form>
           <v-container>   
              <v-layout row wrap justify-space-around>
                <v-flex xs12 sm6>
                  <product-detail-table :order="order" />
                </v-flex>
                  <OrderSummary/>
               </v-layout>
              </v-container>
           </v-form>
    </v-card>
</template>
<script>
import axios from 'axios'
import ProductDetailTable from './ProductDetailTable'
import OrderSummary from './OrderSummary'
import {mapGetters, mapActions} from 'vuex'
export default {
   components: {
     OrderSummary,
     ProductDetailTable
  },
  data(){
    return{
      order: {}
    }
  },
  mounted(){
    this.loadOrderDetail()
    // this.getCartByUserId(this.getUserDetail.userId)
  },
  methods: {
    ...mapGetters(['getCartByUserId']),
    loadOrderDetail: async function(){
      console.log(this.getUserDetail.userId)
      let order = await axios.get(`${process.env.VUE_APP_BACKEND_SERVICE}/cart/${this.getUserDetail.userId}`)
      this.order = order.data
      console.log(this.order)
    }
  },
  computed: {
    ...mapGetters(['getUserDetail'])
  }
}
</script>