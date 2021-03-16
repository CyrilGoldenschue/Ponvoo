<template>

  <div class="row">
    <div class="col-md-6">
      <Image/>
    </div>
    <div class="col-md-6 contents">
      <FormLogin/>
    </div>
  </div>
</template>

<script>
import Image from '../components/Login/Image.vue'
import FormLogin from '../components/Login/Form.vue'

export default {
  name: 'Login',
  components: {
    Image,
    FormLogin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
