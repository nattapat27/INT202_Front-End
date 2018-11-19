<template>

    <v-card>
         <v-layout
    align-left
    justify-space-around
    wrap
  >

        <h1>SHOPPING CART</h1>

        <h2></h2>
         </v-layout>
         <v-divider
      class="mx-3"
      inset
      vertical
    ></v-divider>
       <v-spacer> </v-spacer>

         <v-form>
    <v-container>
      <v-layout row wrap justify-space-around>

        <v-flex xs12 sm6>
          PRODUCT DETAIL
          <v-divider> </v-divider>
        </v-flex>

        <v-card color="light-blue lighten-4" width="344">
            <h2>ORDER SUMMARY</h2>
            <v-divider> </v-divider>
        </v-card>

      </v-layout>
    </v-container>
  </v-form>
    </v-card>

</template>
