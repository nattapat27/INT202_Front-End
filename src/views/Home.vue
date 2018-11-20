<template>
  <div>
      <carousel-banner/>
      <div class="clearfix">
      <router-link  :to="`/product/${product.productId}`" v-for="product in products" :key="product.productId">
        <product-card  class="point" :product="product"  />
      </router-link>
        
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CarouselBanner from '../components/product/CarouselBanner'
import ProductCard from '../components/product/ProductCard'
export default {
  data () {
    return {
      products: []
    }
  },
  computed: {

  },
  components: {
    ProductCard,
    CarouselBanner
  },
  mounted () {
    this.loadAllProduct()
  },
  methods: {
    loadAllProduct: async function () {
      let products = await axios.get(process.env.VUE_APP_BACKEND_SERVICE + '/products')
      // this.items = items
      products = products.data
      this.products = products
      console.log(products)
    }
  }
}
</script>

<style>
.clearfix {
  content: "";
  clear: both;
  display: table;
  width: 1200px;
  height: 250px;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 12%;
}

.point {
  padding-left: 80px;
  padding-bottom: 30px;
  width: 30%;
  float: left;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 60%;
}
</style>
