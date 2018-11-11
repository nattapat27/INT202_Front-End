<template>
  
  <div class="pop">
  <pop v-for="message in messages" :key="message" :msg="message"/>
    
 

  </div>
</template>


<script>
// @ is an alias to /src
import axios from "axios";
import pop from "@/components/Pop.vue";

export default {
  name: "Profile",
  components: {
    pop
  },
  data() {
    return {
      messages: ["eiei", "sun", "vueJS"]
    };
  },
  mounted(){
    console.log('render sed laew');
  }
};
</script>
