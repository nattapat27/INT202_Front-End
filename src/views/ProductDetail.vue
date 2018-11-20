<template>
    <div>
        <!-- <center><h1 class="header">Added To Cart</h1></center> -->
        <div class="imageProduct">
            <v-carousel style="width: 250px" height="250px" margin-top="50px">
              <v-carousel-item :src="product.image"></v-carousel-item>
            </v-carousel>
        </div>

        <div><p class="titleProduct">{{product.productName}}</p><br>
            <p class="subtitle">{{product.price}}
             <br> Quanlity :
                <b-dropdown border: variant="#ffffff" id="ddown-sm-left" text="1" size="sm" class="m-2">
                          <b-dropdown-item >1</b-dropdown-item>
                          <b-dropdown-item>2</b-dropdown-item>
                          <b-dropdown-item >3</b-dropdown-item>
                          <b-dropdown-item >4</b-dropdown-item>
                          <b-dropdown-item>5</b-dropdown-item>
                          <b-dropdown-item >6</b-dropdown-item>
                          <b-dropdown-item>7</b-dropdown-item>
                          <b-dropdown-item>8</b-dropdown-item>
                          <b-dropdown-item>9</b-dropdown-item>
                          <b-dropdown-item>10</b-dropdown-item>
                      </b-dropdown>
                </p>
              </div>
<br>

          <div class="Button">
            <v-btn class="buttonBuyNow" color="#5670BA" large >Buy Now</v-btn>
            <v-btn class="buttonAddToShoppingCart" color="#5670BA" large>Add to Shopping Cart</v-btn>
          <br><br><br><br>

          </div>
          <center><div> <p class="underline">__________________________________________________________________________________________________________________________________________________</p>
          </div></center>

                  <div class="ProductDetail">
                        <p class="ProductDetailTitle">Product Details</p>
                        <br>
                      <p class="subheader">Details</p>
                      <p class="bodyText">{{product.description}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      product: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      let productId = to.params.productId
      vm.loadProductDetail(productId)
    })
  },
  methods: {
    loadProductDetail: async function (productId) {
      console.log(productId)
      let product = await axios.get(`${process.env.VUE_APP_BACKEND_SERVICE}/product/${productId}`)
      product = product.data
      this.product = product
      console.log(this.product)
    }
  }
}
</script>

<style scoped>
.imageProduct {
  margin-left: 12%;
}
.header {
  margin-top: 2.5%;
}
.titleProduct {
  color: #5670BA;
  font-size: 16px;
  font-weight: bold;
  float: right;
  margin-top: -15%;
  margin-right: 50%;
}

.subtitle {
  color: #979BA9;
  font-size: 12px;
  float: right;
  margin-right: 57.6%;
  margin-top: -11%;
}
/* .buttonContinueShopping {

} */

.Button{
  float: right;
  margin-right: 38%;
  margin-top: -6%;
}
.buttonBuyNow{
  color: #ffffff;

  /* margin-right: 38%;
  margin-top: -6%; */
}

.buttonAddToShoppingCart{
  color: #ffffff;

}

.underline{
  color: #979BA9;
}

.ProductDetailTitle{
  color: #979BA9;
  font-size: 16px;
  font-weight: bold;
  color: #979BA9;
  margin-top: 2%;
  margin-left: 18%;
}

.subheader{
  font-weight: bold;
  font-size: 12px;
  margin-left: 18%;
  color: #979BA9;
}

.bodyText{
  margin-left: 18%;
  color: #979BA9;
}

#ddown-sm-left{
  border: 0.5px solid #979BA9;
  border-radius: 20%;
}

</style>
