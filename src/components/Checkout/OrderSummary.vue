<template>
        <v-card color="light-blue lighten-4" width="400">
            <br>
            <h2>  ORDER SUMMARY</h2>
            <v-divider> </v-divider>
            ITEMS
            <br>
            <br>
            <br>
    <!-- ตัวแปรซัมติง product list -->
            <br>
            <br>
            <br>
            <br>
            SHIPPING
            <v-flex xs12 sm6 d-flex>
        <b-form-select v-model="selected" :options="options" class="mb-3" size="sm" width="2pt"/>
            </v-flex>
            <v-divider> </v-divider>
            <v-layout justify-center>
                TOTAL COST                   
            <v-spacer> </v-spacer>
                155  THB <!-- ตัวแปรราคารวม-->
            <v-spacer> </v-spacer>
            </v-layout>
            <br>
            <br>
            <br>
        </v-card>
</template>

<script>
  export default {
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Kerry -55 THB' }
      ]
    }
  }
}
</script>
