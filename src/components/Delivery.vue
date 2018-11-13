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
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          E-MAIL ADDRESS
          <v-text-field
            type="email"
            label="email"
            single-line
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          COUNTRY
          <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
        </v-flex>

        <v-flex xs12 sm6>
          CITY
          <v-text-field
            label="city"
            single-line
            solo
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          ADDRESS
          <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6"
                     solo >
     </b-form-textarea>
        </v-flex>
 
        <v-flex xs12 sm6>
          ZIPCODE
          <v-text-field
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
  export default {
    data: () => ({
      items: ['THAILAND', 'JAPAN', 'KOREA', 'CHINA'],
      text: ''
    })
  }
</script>
