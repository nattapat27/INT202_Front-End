  <template>
  <v-card>

    <br>
       <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1> 1" step="1"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1> 2" step="2"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1> 3" step="3"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4"></v-stepper-step>
    </v-stepper-header>

    <v-stepper-items id="fontcolor">
      <v-stepper-content step="1">
        <img src="../assets/notepad.png" alt="visa">
        SELLER HAS RECEIVED YOUR ORDER
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Next
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <img src="../assets/confirmation-2.png" alt="visa">
        SELLER HAS CONFIRMED YOUR ORDER

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
        <img src="../assets/delivery-truck.png" alt="visa">
        HOORAY! YOUR ORDER IS ON THE WAY TO YOU!

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
        <img src="../assets/order.png" alt="visa">
        CONGRATULATIONS! YOU FINALLY RECEIVED YOUR ORDER!

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

<style scoped>
  #fontcolor {
    font-family: 'Montserrat';
    font-size: 20;
    font-weight: bold;
    color: #5670BA;
    border-radius: 10px;
  }
</style>

<script>

export default {
  data () {
    return {
      e1: 0
    }
  }
}
</script>
