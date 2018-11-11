<template>
  <v-app>
    <mainheader/>




  </v-app>
  
  
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Delivery from './components/Delivery'
import Mainheader from './components/Mainheader'
import '@mdi/font/css/materialdesignicons.css'

export default { //พื้นฐานของวิวที่มีไว้เก็บทุกหน้า
  name: 'App',
  components: {
    HelloWorld,
    Delivery,
    Mainheader
  },
  data () {
    return {
      //
    }
  }
}
</script>
