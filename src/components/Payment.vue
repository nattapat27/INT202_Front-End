<template>

<v-container grid-list-md text-xs-left>

<v-card >

  <br>
  <br>
  <br>

  <h1 class="text-md-left"> PAYMENT METHOD</h1>
       <v-layout
    align-center
    justify-space-around
    wrap
  >
  <v-avatar>
       <img
        src="Visa-logo.jpg"
        alt="visa"
      >
  </v-avatar>

     <v-avatar>
       <img
        src="Mastercardlogo.png.jpg"
        alt="mastercard"
      >
  </v-avatar>
 <v-avatar>
       <img
        src="Visa-logo.jpg"
        alt="paypal"
      >
  </v-avatar>

       </v-layout>
   <v-form>
    <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm6>
          CARDHOLDER NAME
          <v-text-field
            label="CARTHOLDER NAME"
            single-line
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          CARD NUMBER
          <v-text-field
            type="NUMBER"
            label="xxxx - xxxx -xxxx-xxxx "
            single-line
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          END DATE

        <v-select
          :items="Month"
          label="MM"
          solo
        ></v-select>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <br>
      <v-select
          :items="Year"
          label="YY"
          solo
        ></v-select>

        </v-flex>

        <v-flex xs12 sm6 md3>
          CCVV
          <v-text-field
            type="NUMBER"
            label="xxxx"
            single-line
            solo
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
</v-card>
</v-container>
</template>
<script>
export default {
  data: () => ({
    items: ['THAILAND', 'JAPAN', 'KOREA', 'CHINA'],
    text: ''
  })
}
</script>
