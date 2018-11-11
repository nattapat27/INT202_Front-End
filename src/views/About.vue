<template>
  <div class="Food">
    <h1>This is an about page</h1>

  </div>
</template>
<script>

import Food from '../components/Food.vue'




export default {
  name: 'About',
  components: {
    Food
  },
  data (){
    return {
      messages : ['pop','sun','vueJS']
    }
  }
  
  
}
</script>
