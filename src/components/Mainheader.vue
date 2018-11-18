  <template>
    <div >
      <!-- <v-layout justify-center>
         <v-spacer>
      </v-spacer>
        <v-btn fab dark small="7pt">
              <v-icon>account_circle</v-icon>
            </v-btn>

      </v-layout> -->
      <v-toolbar slot="header"  height="65pt"  >
      <v-toolbar-title class="headline text-uppercase">
          <v-btn color="#7F63BA" id="fontcolor">All Categories</v-btn>
          <v-btn color="#F6B94D" id="fontcolor">Best Seller</v-btn>
          <v-btn color="#DA5786" id="fontcolor">Super deal</v-btn>
          <v-btn color="#F08B49" id="fontcolor">Event coupon</v-btn>

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
    <v-spacer></v-spacer>
     </v-spacer>
           <!-- <v-text-field
            class="test"
            label="Outline"
            outline
            color="blue"
          ></v-text-field> -->

      <v-spacer>
        <router-link to="/checkoutproduct">
      <v-btn color="warning" @chick="setIsShowMainHeader(false)"> Cart
        <v-icon color="white" >shopping_cart</v-icon>
      </v-btn>
      </router-link>
      </v-spacer>
    </v-toolbar>
    </div>
   </template>

<style scoped>
  #fontcolor {
    font-family: 'Montserrat';
    font-size: 20;
    font-weight: bold;
    color: #FFFFFF;
    border-radius: 10px;
  }
</style>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ]
  }),
  name: 'checkout',
  computed: {
    // ...mapGetters(['getIsShowMainHeader'])
  },
  methods: {
    ...mapActions(['setIsShowMainHeader'])
  },
  mounted () {
    this.setIsShowMainHeader(true)
  }
}
</script>
