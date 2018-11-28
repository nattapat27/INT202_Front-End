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
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  components: {
    OrderSummary,
    ProductDetailTable
  },
  data () {
    return {
      order: {}
    }
  },
  mounted () {
    this.loadOrderDetail()
    
    OmiseCard.configure({
        publicKey: "pkey_test_5dzfquzxmdlxfdgu2yx",
        amount: this.getSumPrice
    });
  },
  methods: {
    ...mapActions(['fetchOrderFromUser']),
    ...mapMutations(['setOrder', 'setSumPrice']),
    loadOrderDetail: async function () {
      console.log(this.getUserDetail.userId)
      let order = await axios.get(`${process.env.VUE_APP_BACKEND_SERVICE}/cart/${this.getUserDetail.userId}`)
      this.order = order.data
      this.setOrder(this.order)
      console.log(this.getOrder.order.orderId)
      let orderDetail = this.getOrder.order.orderDetail
      let sumPrice = 0
      for(let i = 0; i<orderDetail.length; i++){
        console.log(orderDetail.length)
        sumPrice += orderDetail[i].quantity * orderDetail[i].product.price
      }
      this.setSumPrice(sumPrice)

    }
  },
  computed: {
    ...mapGetters(['getUserDetail', 'getOrder', 'getSumPrice'])
  }
}
</script>
