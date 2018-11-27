  <template>
  <v-app>
    <v-card>
      <br>
      <v-stepper v-model="stepperStatus">
      <v-stepper-header>
        <v-stepper-step :complete="stepperStatus > 1" step="1">CART</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="stepperStatus > 2" step="2">DELIVERY</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="stepperStatus > 3" step="3">PAYMENT</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4">CONFIRMATION</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <Cart ref="cart" />
        </v-stepper-content>

        <v-stepper-content step="2">
          <delivery ref="delivery"/>
      </v-stepper-content>

      <v-stepper-content step="3">
        <payment ref="payment"/>
      </v-stepper-content>

      <v-stepper-content step="4">
        <confirmation ref="confirmation" />
      </v-stepper-content>

      <v-layout class="text-xs-right" justify-space-around>
        <router-link v-if="stepperStatus == 1" to="/">
          <v-btn @click="setIsShowMainHeader(true)" >Back to shopping</v-btn>
        </router-link>
        <v-btn v-else @click="stepperStatus -= 1">Back</v-btn>
        <v-spacer></v-spacer>
        <v-btn  color="primary" @click="stepperAction(); stepperStatus = parseInt(stepperStatus) + 1">
            Next
        </v-btn>
      </v-layout>
      </v-stepper-items>
    </v-stepper>

  </v-card>
  </v-app>
</template>

<script>
import Payment from '../components/Checkout/Payment'
import Delivery from '../components/Checkout/Delivery'
import Cart from '../components/Checkout/Cart'
import Confirmation from '../components/Checkout/Confirmation'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      stepperStatus: 0
    }
  },
  components: {
    Payment,
    Delivery,
    Cart,
    Confirmation
  },
  methods: {
    ...mapActions(['setIsShowMainHeader']),
    stepperAction: function() {
      if(this.stepperStatus == 2){
        console.log('Using Address Function is Work!!!')
        this.$refs.delivery.updateUserDeliveryDetail()
      }
    },
    test: function(){
      console.log('test : '+this.stepperStatus)
    }
  },
  mounted () {
    this.setIsShowMainHeader(false)
  }
}
</script>
