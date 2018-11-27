<template>
  <v-container grid-list-md text-xs-left>
    <br>
    <br>
    <br>

    <h1 class="text-md-left">PAYMENT METHOD</h1>
    <v-layout align-center justify-space-around wrap>
      <br>
      <b-form-group>
        <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent">
          <b-form-radio value="Visa"></b-form-radio>
          <v-avatar size="80">
            <img src="@/assets/Visa-logo1.jpg" alt="visa">
          </v-avatar>

          <b-form-radio value="MasterCard"></b-form-radio>
          <v-avatar size="80">
            <img src="@/assets/Mastercardlogo.png" alt="mastercard">
          </v-avatar>

          <b-form-radio value="PayPal"></b-form-radio>
          <v-avatar size="80">
            <img src="@/assets/paypal.png" alt="paypal">
          </v-avatar>
        </b-form-radio-group>
      </b-form-group>
      <br>
    </v-layout>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6>CARDHOLDER NAME
            <v-text-field label="CARTHOLDER NAME" single-line solo></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>CARD NUMBER
            <v-text-field type="NUMBER" label="xxxx - xxxx -xxxx-xxxx " single-line solo></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>END DATE
            <v-text-field v-model.number="expMonth" label="Month"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <br>
            <v-text-field v-model.number="expYear" label="Year"></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>CCVV
            <v-text-field v-model.number="ccv" type="NUMBER" label="xxxx" single-line solo></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import axios from 'axios'
export default {
  data() {
    return {
      selected: "first",
      options: [
        { value: "Visa" },
        { value: "MasterCard" },
        { value: "PayPal" }
      ],
      cardHolderName: "",
      expMonth: 1,
      expYear: 2020,
      cardNumber: 0,
      ccv: 0
    }
  },
  computed: {
    ...mapGetters(["getUserDetail", 'getOrder'])
  },
  mounted() {

  },
  methods: {
    confirmPayment: function() {
      console.log("payment run!!!")
      console.log(this.getOrder.order.orderId)
      let orderDetail = this.getOrder.order.orderDetail
      let sumPrice = 0
      for(let i = 0; i<orderDetail.length; i++){
        console.log(orderDetail.length)
        sumPrice += orderDetail[i].quantity * orderDetail[i].product.price
      }
      console.log(sumPrice)
      OmiseCard.configure({
        publicKey: "pkey_test_5dzfquzxmdlxfdgu2yx",
      });
      OmiseCard.open({
        frameLabel: "Esimo",
        frameDescription: "Invoice #3847",
        amount: sumPrice,
        onCreateTokenSuccess: token => {
          /* Your code, e.g., submit form or send ajax request to server */
          axios.patch(`${process.env.VUE_APP_BACKEND_SERVICE}/order/confirm/${this.getOrder.order.orderId}`)
          .then(rest => console.log(rest))
        },
        onFormClosed: () => {
          /* Your handler when form was closed */

          console.log("This is FormClose")
        }
      });
    }
  }
};
</script>
