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
            v-model="firstName"
            single-line
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          LAST NAME
          <v-text-field
            v-model="lastName"
            label="Last name"
            single-line
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          PHONE NUMBER
          <v-text-field
            v-model="phoneNumber"
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
          v-model="address.country"
          label="Solo field"
          solo
        ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          CITY
          <v-text-field
            v-model="address.city"
            label="city"
            single-line
            solo
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          ADDRESS
          <b-form-textarea id="textarea1"
                     v-model="address.addressDetail"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6"
                     solo >
     </b-form-textarea>
        </v-flex>

        <v-flex xs12 sm6>
          ZIPCODE
          <v-text-field
          v-model="address.zipcode"
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
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      address: {
        country: '',
        city: '',
        addressDetail: '',
        zipcode: '',
        addressId: 0
      },
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  },
  computed: {
    ...mapGetters(['getUserDetail'])
  },
  mounted () {
    this.loadUserAddressDetail()
  },
  methods: {
    loadUserAddressDetail: function () {
      console.log(this.getUserDetail.address)
      this.address = this.getUserDetail.address
      // delete this.address.addressId
      console.log(this.address)

      this.email = this.getUserDetail.email
      this.firstName = this.getUserDetail.firstName
      this.lastName = this.getUserDetail.lastName
      this.phoneNumber = this.getUserDetail.phoneNumber
    },
    updateUserDeliveryDetail: function () {
      console.log('save new user & address!!!')
      let userDetail = this.getUserDetail
      userDetail.address = this.address
      userDetail.email = this.email
      userDetail.phoneNumber = this.phoneNumber
      userDetail.firstName = this.firstName
      userDetail.lastName = this.lastName

      console.log('After Set NewDetail to User & Address')
      console.log(userDetail)
      axios.post(`${process.env.VUE_APP_BACKEND_SERVICE}/user/address/${userDetail.userId}`, userDetail.address)
        .then((response) => {
          console.log('success update detail')
        })
    }
  }

}
</script>
