  <template>
  <v-app>
  <v-card>
    <br>
    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">CART</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">DELIVERY</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">PAYMENT</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">CONFIRMATION</v-stepper-step>
    </v-stepper-header>



    <v-stepper-items>
      <v-stepper-content step="1">

        <!-- Component Cart -->
        <Cart ref="cart" />

        <v-layout class="text-xs-right" justify-space-around>
          <router-link to="/">
         <v-btn  @click="setIsShowMainHeader(true)">Back to shopping</v-btn>
          </router-link>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <br>
          <br>
          <v-btn  color="primary" @click="e1 = 2">
            Next
          </v-btn>
        </v-layout>
      </v-stepper-content>

      <v-stepper-content step="2">

        <delivery ref="delivery"/>
        <v-layout class="text-xs-right" justify-space-around>
        <v-btn color="primary" @click="e1 = 1">
          Back
        </v-btn>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-btn color="primary" @click="e1 = 3">
          Next
        </v-btn>
     </v-layout>

      </v-stepper-content>

      <v-stepper-content step="3">
        <!-- component payment -->
        <payment ref="payment"/>

      <v-layout class="text-xs-right" justify-space-around>
        <v-btn  color="primary" @click="e1 = 2" >
          Back
        </v-btn>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
             <v-spacer></v-spacer>

        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Next
        </v-btn>
      </v-layout>

      </v-stepper-content>

      <v-stepper-content step="4">
      <!-- Confirmation component -->
      <confirmation ref="confirmation" />

        <v-layout class="text-xs-right"
         justify-space-around>
          <v-spacer></v-spacer>
            <v-spacer></v-spacer>
             <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Back
        </v-btn>
        </v-layout>

      </v-stepper-content>
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
      e1: 0
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
    buttonAction: function() {
      if(this.e1 == 2){
        console.log('Using Address Function is Work!!!')
        this.$refs.delivery.saveUserAddress()
      }
    }
  },
  mounted () {
    this.setIsShowMainHeader(false)
  }
}
</script>
