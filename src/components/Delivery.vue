<template>
    <div>
      <br>
      <br>
      
      <h1> DELIVERY  </h1>
      <v-card>
        <v-card-text>
           <div>
            First name                      Last name
           </div>
                <div>
            phone number                    e-mail address
                </div>
            country                         city
            <div>
            country                         Zipcode
            </div>
              <v-btn color="GRAY">BACK</v-btn>
            <router-link to="/pop"> <v-btn  color="GREEN">NEXT</v-btn></router-link> 
        </v-card-text>
      </v-card>
      <!-- <img :src="imgProduct" alt=""> -->
      <br>

    </div> 
       
</template>


<script>
import axios from "axios";
export default {
  name: "Delivery",
  components: {
   
  },
  data() {
    return {
      videos: [],
      messages: ["eiei", "sun", "vueJS"],
      imgProduct: 'https://images-na.ssl-images-amazon.com/images/I/71rGsNpSooL._SL1500_.jpg'
    };
  },
  async mounted(){
    console.log('render sed laew');
    let videos = await axios.get("https://videoservice-seal.mybluemix.net/videos")
    console.log(videos.data) 
    this.videos = videos.data
  }
};
</script>

