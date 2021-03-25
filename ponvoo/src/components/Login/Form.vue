<template>
  <div class="col-md-6 contents">
    <div class="row justify-content-center">
      <div class="mb-4">
        <h3>Sign In</h3>
        <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
      </div>

      <form action="#" method="post" @change="onChange()">
        <div class="form-group first">
          <input type="email" class="form-control" id="username" placeholder="Username" required>
        </div>

        <div class="form-group last mb-4">
          <input type="password" class="form-control" id="password" placeholder="Password" required>
        </div>

        <div class="d-flex mb-5 align-items-center">
          <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
            <input type="checkbox" checked="checked"/>
            <div class="control__indicator"></div>
          </label>
          <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span>
        </div>

        <input type="submit" value="Log In" class="btn btn-block btn-primary">

        <span class="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>

        <div class="social-login">
          <a href="#" class="facebook icons-alignement">
            <span class="icon-facebook"></span>
          </a>
          <a href="#" class="twitter icons-alignement">
            <span class="icon-twitter"></span>
          </a>
          <a href="#" class="google icons-alignement">
            <span class="icon-google"></span>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onChange() {
        const test = document.getElementById("username")
        console.log(test.value)
        console.log(test)

        if(test.validity.typeMismatch){
          console.log('Input is not valid type');
        }else{
          console.log('Input is valid type');
        }

        console.log("Change-dance-Chance :D")

    }
  }
}
</script>


<style>
  .icons-alignement{
    margin: 0px 10px;
  }
</style>

