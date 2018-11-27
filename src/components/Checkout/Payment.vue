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

        <v-text-field v-model.number="expMonth" label="Month"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <br>
      <v-text-field v-model.number="expYear" label="Year"></v-text-field>

        </v-flex>

        <v-flex xs12 sm6 md3>
          CCVV
          <v-text-field
            v-model.number="ccv"
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
      selected: 'first',
      options: [
        { value: 'Visa' },
        { value: 'MasterCard' },
        { value: 'PayPal' }
      ],
      cardHolderName: '',
      expMonth: 1,
      expYear: 2020,
      cardNumber: 0,
      ccv: 0
    }
  },
  methods: {
    confirmPayment: function () {
      console.log('payment run!!!')
      Omise.setPublicKey('pkey_test_5dzsdnaino7z9lzzahb')

      var cardInformation = {
        name: this.cardHolderName,
        number: this.cardNumber,
        expiration_month: this.expMonth,
        expiration_year: this.expYear.value,
        security_code: this.expYear.value
      }

      Omise.createToken('card', cardInformation, (statusCode, response) => {
        if (statusCode === 200) {
          // Success: send back the TOKEN_ID to your server. The TOKEN_ID can be
          // found in `response.id`.
          checkoutForm.token.value = response.id
          checkoutForm.submit()
        } else {
          // Error: display an error message. Note that `response.message` contains
          // a preformatted error message. Also note that `response.code` will be
          // "invalid_card" in case of validation error on the card.
        }
      })
    }
  }
}
</script>
