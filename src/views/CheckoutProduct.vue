  <template>
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

      <v-stepper-step step="4">COMFIRMATION</v-stepper-step>
      
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Next
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
      
            <delivery/>
    
        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Back
        </v-btn>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Next
        </v-btn>

        
      </v-stepper-content>

      <v-stepper-content step="3">
        <payment/>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Back
        </v-btn>

        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Next
        </v-btn>

        
      </v-stepper-content>




      <v-stepper-content step="4">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Back
        </v-btn>

        
      </v-stepper-content>


      
    </v-stepper-items>
  </v-stepper>
  </v-card>
    </template>

<script>
import Payment from '../components/Payment'
import Delivery from '../components/Delivery'
  export default {
    data () {
      return {
        e1: 0
      }
    },
    components: {
      Payment,
      Delivery
    }
  }
</script>
