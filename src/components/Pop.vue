<template>
  <div class="Pop">
    
      <h1> Name : {{firstName}}  </h1>
      <h1>NickName : {{nickName}}</h1>
      <h1>{{msg}}</h1>
      <h1>--------------</h1>
      <p v-if="seen">Now you see me</p>
      <a @click="doSomething"> ...TEST EIEI... </a>
    </div>

</template>

<script>
export default {
  name: 'Pop',
  props: {
    msg: String
  },
  data() {
    return {
      firstName: 'Virada',
      nickName: 'Pop'
    }
  } 

}
</script>