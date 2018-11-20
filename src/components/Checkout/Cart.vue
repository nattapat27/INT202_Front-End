<template>

    <v-card>
      <br>
      <h1>SHOPPING CART</h1>  
    
       <v-spacer> </v-spacer>

         <v-form>
           <v-container>   
              <v-layout row wrap justify-space-around>
                <v-flex xs12 sm6>
                   <product-detail-table/>
                </v-flex>
                  <OrderSummary/>
               </v-layout>
              </v-container>
            </v-form>

    </v-card>

</template>
<script>
  
import ProductDetailTable from './ProductDetailTable'
import OrderSummary from './OrderSummary'
export default {
   components: {
     OrderSummary,
     ProductDetailTable
}
}
</script>