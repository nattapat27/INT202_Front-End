<template>
  <v-footer
    dark
    height="55"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">LOGO </strong>
        <v-spacer></v-spacer>
    <v-btn fab dark small color="indigo">
      <v-icon dark>account_circle</v-icon>
    </v-btn>

      </v-card-title>

    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
   
    })
  }
</script>