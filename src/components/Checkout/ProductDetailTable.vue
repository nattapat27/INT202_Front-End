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
        <v-layout justify-space-around>
          <v-avatar size="30">
                <img  src="@/assets/Visa-logo1.jpg"  alt="visa">
          </v-avatar>
          <v-spacer> </v-spacer>
          <v-spacer> </v-spacer>
          <!-- จำนวน -->
          <v-layout justify-center>
                  
       <v-text-field siz
          type="number"
                  
            solo
          ></v-text-field>
          </v-layout>
          <v-spacer> </v-spacer>
          <!-- เงิน -->
          50
          <v-spacer> </v-spacer>
          <!-- ราคารวม -->
          100
        </v-layout>


</v-container>        
</template>
<script>

export default {
   components: {
    
}
}
  
</script>