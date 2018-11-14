  <template>
    

    <!-- <v-toolbar app color="teal lighten-3"> -->
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
       <div>
          <v-btn color="#7F63BA" id="fontcolor">All Categories</v-btn>
          <v-btn color="#F6B94D" id="fontcolor">Best Seller</v-btn>
          <v-btn color="#DA5786" id="fontcolor">Super deal</v-btn>
          <v-btn color="#F08B49" id="fontcolor">Event coupon</v-btn>
      </div>
      </v-toolbar-title>
      <v-spacer>

      </v-spacer>
      <v-spacer>
        <v-text-field   
        append-icon="mic"
        class="mx-3"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo-inverted>
        </v-text-field>

      </v-spacer>
          <v-text-field
            class="test"
            label="Outline"
            outline
            color="blue"
          ></v-text-field>
      
 

      <v-spacer>
        <router-link to="/checkoutproduct"> 
      <v-btn color="warning" @chick="setIsShowMainHeader(false)"> Cart  
        <v-icon color="wthie" >shopping_cart</v-icon>
      </v-btn>
      </router-link>
      </v-spacer>
    </v-toolbar>

   </template>
   
<style scoped> 
  #fontcolor {
    font-family: 'Montserrat';
    font-size: 20;
    font-weight: bold;
    color: #FFFFFF;
    border-radius: 10px;
  }
  .test{
    border-color: blueviolet
  }




</style>
  
   
   

<script>
import  {mapGetters } from 'vuex'
export default {
    name: 'checkout',
    computed: {
      ...mapGetters(['getIsShowMainHeader'])
    },
    mounted() {
       this.getIsShowMainHeader(true)
    }
}
</script>


