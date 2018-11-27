<template>

<v-container grid-list-md text-xs-left>

<v-card >

  <br>
  <br>
     <h1 class="text-md-left">    DELIVERY  </h1>
   <v-form>
    <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm6>
          FIRST NAME
          <v-text-field
            label="First name"
            single-line
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          LAST NAME
          <v-text-field
            label="Last name"
            single-line
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          PHONE NUMBER
          <v-text-field
          type="number"
            label="number"
            single-line
            solo
            width="2pt"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          E-MAIL ADDRESS
          <v-text-field
            v-model="email"
            type="email"
            label="email"
            single-line
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          COUNTRY
          <v-text-field
          v-model="country"
          label="Solo field"
          solo
        ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          CITY
          <v-text-field
            v-model="city"
            label="city"
            single-line
            solo
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          ADDRESS
          <b-form-textarea id="textarea1"
                     v-model="addressDetail"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6"
                     solo >
     </b-form-textarea>
        </v-flex>

        <v-flex xs12 sm6>
          ZIPCODE
          <v-text-field
          v-model="zipcode"
          type="number"
            label="zipcode"
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
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return{
      country: '',
      city: '',
      addressDetail: '',
      zipcode: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: ''
    }
  },
  computed: {
    ...mapGetters(['getUserDetail'])
  },
  mounted(){
    this.loadUserAddressDetail()
  },
  methods:{
    loadUserAddressDetail: function(){
      console.log(this.getUserDetail.address)
      let userAddress = this.getUserDetail.address
      this.addressDetail = userAddress.addressDetail
      this.city = userAddress.city
      this.country = userAddress.country
      this.zipcode = userAddress.zipcode
      this.email = this.getUserDetail.email
    },
    saveUserAddress: function(){
      console.log('save new address!!!')
    }
  }

}
</script>
