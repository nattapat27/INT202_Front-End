<template>
<v-container>
        <br>
        <v-layout justify-space-around >
                PRODUCT DETAIL
          <v-spacer> </v-spacer>
          <v-spacer> </v-spacer>
          <v-spacer> </v-spacer>
                QUANTITY
          <v-spacer> </v-spacer>
          <v-spacer> </v-spacer>
                PRICE
          <v-spacer> </v-spacer>
                TOTAL
        </v-layout>
        <v-divider> </v-divider>
         <br>

  <!-- product List + Product detail ซัมติงเอามาใส่วนลูป -->
        <v-layout justify-space-around v-for="order in order.order.orderDetail" :key="order.productId">
          <v-avatar size="30">
                <img  :src="order.product.image"  alt="order.product.productName">
          </v-avatar>
          {{order.product.productName}}
          <v-spacer> </v-spacer>
          <v-spacer> </v-spacer>
          <!-- จำนวน -->
          <v-layout justify-center>
          <input type="number" name="quantity"
            min="0" max="100" :value="order.quantity" >
       
          </v-layout>
          <v-spacer> </v-spacer>
          <!-- เงิน -->
          {{order.product.price}}
          <v-spacer> </v-spacer>
          <!-- ราคารวม -->
          {{order.totalPrice}}
        </v-layout>
</v-container>        
</template>
<script>

export default {
      components: {
    
      },
      props: {
            order: {}
      },
      mounted(){
            console.log('product table')
      },
      methods: {

      }
}
  
  
</script>