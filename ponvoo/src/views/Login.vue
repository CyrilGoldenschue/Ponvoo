<template>
  <Layout/>
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <img src="../assets/img/undraw_remotely_2j6y.svg" alt="Image" class="img-fluid">
        </div>
        <FormLogin/>
      </div>
    </div>
  </div>
</template>

<script>
import FormLogin from '../components/Login/Form.vue';
import Layout from '../components/Layout.vue';

export default {
  name: 'Login',
  components: {
    FormLogin,
    Layout
  }
}
</script>