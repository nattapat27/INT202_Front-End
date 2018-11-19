<template>
  <div>
  
    <b-form-group label="Radios using sub-components">
      <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent">
        <b-form-radio value="first">Toggle this custom radio</b-form-radio>
        <b-form-radio value="second">Or toggle this other custom radio</b-form-radio>
        <b-form-radio value="third" disabled>This one is Disabled</b-form-radio>
        <b-form-radio :value="{fourth: 4}">This is the 4th radio</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'first',
      options: [
        { text: 'Toggle this custom radio', value: 'first' },
        { text: 'Or toggle this other custom radio', value: 'second' },
        { text: 'This one is Disabled', value: 'third', disabled: true },
        { text: 'This is the 4th radio', value: {fourth: 4} }
      ]
    }
  }
}
</script>