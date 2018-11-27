<template>

<v-container grid-list-md text-xs-left>
  <br>
  <br>
  <br>

  <h1 class="text-md-left"> PAYMENT METHOD</h1>
       <v-layout
    align-center
    justify-space-around
    wrap
  >
  <br>
      <b-form-group >
      <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent">
 <b-form-radio value="Visa" ></b-form-radio>
  <v-avatar
  size="80">
       <img
        src="@/assets/Visa-logo1.jpg"
        alt="visa"
      >
  </v-avatar>

 <b-form-radio value="MasterCard"></b-form-radio>
     <v-avatar
     size="80">
       <img
        src="@/assets/Mastercardlogo.png"
        alt="mastercard"
      >
  </v-avatar>

    <b-form-radio value="PayPal"></b-form-radio>
    <v-avatar
 size="80">
       <img
        src="@/assets/paypal.png"
        alt="paypal"
       >
      </v-avatar>
      </b-form-radio-group>
    </b-form-group>
  <br>

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
          :items="m"
          label="Month"
          solo
        ></v-select>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <br>
      <v-select
          :items="y"
          label="Year"
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

</v-container>

</template>

<script>
export default {
  data () {
    return {
      m: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      y: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
      selected: 'first',
      options: [
        { value: 'Visa' },
        { value: 'MasterCard' },
        { value: 'PayPal' }
      ],
      cardHolderName: '',
      cardNumber: 0,
      
    }
  },
  methods: {
    confirmPayment: function(){
      Omise.setPublicKey('pkey_test_5dzsdnaino7z9lzzahb');

        var cardInformation = {
          name:             cardForm.nameOnCard.value,
          number:           cardForm.cardNumber.value,
          expiration_month: cardForm.expiryMonth.value,
          expiration_year:  cardForm.expiryYear.value,
          security_code:    cardForm.securityCode.value
        };

        Omise.createToken('card', cardInformation, (statusCode, response) =>{
          if (statusCode === 200) {
            // Success: send back the TOKEN_ID to your server. The TOKEN_ID can be
            // found in `response.id`.
            checkoutForm.token.value = response.id;
            checkoutForm.submit();
          }
          else {
            // Error: display an error message. Note that `response.message` contains
            // a preformatted error message. Also note that `response.code` will be
            // "invalid_card" in case of validation error on the card.
          }
        });

    }
  }
}
</script>
