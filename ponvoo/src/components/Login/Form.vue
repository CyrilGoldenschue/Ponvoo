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

        <input type="submit" value="Log In" id="button" class="btn btn-block btn-primary muted">

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
        const username = document.getElementById("username")
        const password = document.getElementById("password")
        const button = document.getElementById("button")

        //Check if the username or the password are valid.
        //If it's case then the style's button switches to its normal state. 
        if((this.isImputValid(username)) && (this.isImputValid(password)))
          button.classList.remove("muted");
        else
          button.classList.add("muted");
    },
    isImputValid(input){
      if((input.validity.typeMismatch) || (input.value === ""))
        return false
      else
        return true
    }
  }
}
</script>

<style>
  .icons-alignement{
    margin: 0px 10px;
  }

  .muted{
    background-color: #9d98fe !important;
    border-color:#9d98fe !important;
  }
</style>

