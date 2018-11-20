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
          <v-avatar
  size="30">
       <img
        src="@/assets/Visa-logo1.jpg"
        alt="visa"
      >
  </v-avatar>

          <v-spacer> </v-spacer>
          <v-spacer> </v-spacer>
          <b-form-select  type="number" class="mb-3" size="sm" width="2pt"/>
          <v-spacer> </v-spacer>
          50
          <v-spacer> </v-spacer>
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