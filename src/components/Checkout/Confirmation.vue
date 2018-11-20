<template>
   
    <v-card>
      <br>
      <h1>Confirmation</h1>  
    
       <v-spacer> </v-spacer>
       
         <v-form>
           <v-container>   
              <v-layout row wrap justify-space-around>
                <v-flex xs12 sm6>
              
              
                <!-- ต้องเปลี่ยนจากกรอบเลือกจำนวนสินค้าให้ฟิคค่า -->
                   <product-detail-table/>
              
              
                </v-flex>
                
               
                  <DetailSummary/>
            
              
              
               </v-layout>
              </v-container>
            </v-form>

    </v-card>
    
    
</template>
<script>
import ProductDetailTable from './ProductDetailTable'
import OrderSummary from './OrderSummary'
import DetailSummary from './DetailSummary'
export default {
   components: {
     OrderSummary,
     ProductDetailTable,
     DetailSummary
}
}
</script>

