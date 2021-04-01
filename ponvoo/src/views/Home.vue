<template>
  <Header/>
  <div class="content">
    <div class="container">
      <div class="row">
        <FormHome/>
        <div class="col-md-6">
          <img src="../assets/img/love.jpg" alt="Image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import FormHome from '../components/Home/Form.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    FormHome
  }
}
</script>