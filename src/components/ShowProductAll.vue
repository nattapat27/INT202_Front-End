<template>
    <div class="clearfix">
<div class="point" v-for="(item,i) in items"
                   :key="i"
                   
                    >    
  <v-hover  >
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img  :src ="item.src" >
        <v-expand-transition >
          <div 
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"

          >
         <p> {{item.price}}</p>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
       
          <v-icon>mdi-cart</v-icon>
        
        <div class="font-weight-light grey--text title mb-2">{{item.category}}</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">{{item.name}}</h3>
        <div class="font-weight-light title mb-2">
          {{item.detail}}
        
        </div>
      </v-card-text>
      
    </v-card>
  </v-hover>
   
</div>
        </div>
</template>

<script>
 export default {
  data () {
    return {
      items: [
        {
          src:
          'https://lumiere-a.akamaihd.net/v1/images/file_4e56e66a.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8'
         , price : '$11'
          , category: 'Home Décor'
          , name :'Stitch Sketchbook '
          , detail :'Bring the spirit of Aloha'
        },
        {
          src:
            'https://lumiere-a.akamaihd.net/v1/images/file_12ffda0f.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8'
          , price : '$16.95'
          , category: 'Bed & Bath'
          , name :'Alien Fleece Throw'
          , detail :'Designed for everyday'
       },
        {
          src:
            'https://lumiere-a.akamaihd.net/v1/images/file_882c3790.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8'
            , price : '$12'
            , category: 'Plush & Stuffed Animalse'
            , name :'Eeyore Plush Winnie the Pooh'
            , detail :'So soft. So fun.'  
       },
        {
          src:
            'https://lumiere-a.akamaihd.net/v1/images/file_ab0635ea.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8'
          , price : '$29.95'
         , category: 'Socks & Underwear'
          , name :'Mickey Mouse Rattle Socks'
          , detail :'Women Running Shorts'
        },
         {
          src:
            'https://lumiere-a.akamaihd.net/v1/images/file_02006476.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8https://lumiere-a.akamaihd.net/v1/images/file_1f5ba043.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8'
         , price : '$16.95'
         , category: 'Pajamas & Sleepwear'
          , name :'Incredibles Logo PJ PALS for Baby'
          , detail :'Made with a soft cotton '
        },
        {
          src:
            'https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/ttdywohkvejrimrvbnxy/hurley-one-and-only-perfect-womens-crew-PtnbVf.jpg'
        , price : '$25'
         , category: 'Woman Crew'
          , name :'Hurley One And Only Perfect'
          , detail :'made with thermal fleece'
       }

      ]
    }
  }
}
</script>



<style>
.clearfix {
  content: "";
  clear: both;
  display: table;
}

.point {
  padding-left: 80px;
  padding-bottom: 30px;
  width: 30%;
  float: left;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 60%;
}
</style>