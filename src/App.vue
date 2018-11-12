<template>
  <v-app>
    <mainheader/>
    <br>
    <br>
    <delivery/>
    <br>
    <br>

  </v-app>

</template>

<script>
import Delivery from './components/Delivery'
import Mainheader from './components/Mainheader'

import '@mdi/font/css/materialdesignicons.css'
import { mapActions, mapGetters } from 'vuex'

export default { // พื้นฐานของวิวที่มีไว้เก็บทุกหน้า
  name: 'App',
  components: {
    Delivery,
    Mainheader
  },

  methods: {
    ...mapActions(['setCurentCheckoutStatus'])

  },
  computed: {
    ...mapGetters(['getCurrentCheckoutStatus'])
  }
}
</script>
