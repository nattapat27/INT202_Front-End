<template>

<center><div>

  <router-link to="/Delivery">
  <v-carousel id="product">
  <v-carousel-item

      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
  </router-link>

</div></center>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src:
            'https://i.pinimg.com/originals/a9/45/c6/a945c6580752e972ebbe2e801bd0f543.jpg'
        },
        {
          src:
            'https://advanced-distribution.com/wp-content/uploads/2016/05/adidas-banner.jpg'
        },
        {
          src:
            'https://www.femnmas.com/wp-content/uploads/2018/01/sale-banners-tips-business-owners.jpg'
        },
        {
          src:
            'https://sk-ii-desktop-my-cdn.azureedge.net/OP/img/product/bestsellers/banner.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped>
#product {
  width: 974.74px;
  height: 250px;
  margin-top: 7%;
}
</style>
