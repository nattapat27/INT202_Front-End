<template>
    <div class="clearfix">
      <router-link  :to="`/product/${product.productId}`" v-for="product in products" :key="product.productId">
        <!-- <product-card  class="point" :product="product"  /> -->
      </router-link>
    </div>
</template>

<script>
import axios from 'axios'
// import ProductCard from './product/ProductCard'
export default {
  data () {
    return {
      items: [
        {
          src:
          'https://lumiere-a.akamaihd.net/v1/images/file_4e56e66a.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8',
          price: '$11',
          category: 'Home Décor',
          name: 'Stitch Sketchbook',
          detail: 'Bring the spirit of Aloha'
        },
        {
          src:
            'https://lumiere-a.akamaihd.net/v1/images/file_12ffda0f.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8',
          price: '$16.95',
          category: 'Bed & Bath',
          name: 'Alien Fleece Throw',
          detail: 'Designed for everyday'
        },
        {
          src:
            'https://lumiere-a.akamaihd.net/v1/images/file_882c3790.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8',
          price: '$12',
          category: 'Plush & Stuffed Animalse',
          name: 'Eeyore Plush Winnie the Pooh',
          detail: 'So soft. So fun.'
        },
        {
          src:
            'https://lumiere-a.akamaihd.net/v1/images/file_ab0635ea.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8',
          price: '$29.95',
          category: 'Socks & Underwear',
          name: 'Mickey Mouse Rattle Socks',
          detail: 'Women Running Shorts'
        },
        {
          src:
            'https://lumiere-a.akamaihd.net/v1/images/file_02006476.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8https://lumiere-a.akamaihd.net/v1/images/file_1f5ba043.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8',
          price: '$16.95',
          category: 'Pajamas & Sleepwear',
          name: 'Incredibles Logo PJ PALS for Baby',
          detail: 'Made with a soft cotton '
        },
        {
          src:
            'https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/ttdywohkvejrimrvbnxy/hurley-one-and-only-perfect-womens-crew-PtnbVf.jpg',
          price: '$25',
          category: 'Woman Crew',
          name: 'Hurley One And Only Perfect',
          detail: 'made with thermal fleece'
        }
      ],
      products: []
    }
  },
  components: {
    // ProductCard
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
