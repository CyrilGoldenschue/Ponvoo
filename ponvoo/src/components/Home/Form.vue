<template>
  <div class="col-md-6 contents">
    <div class="row justify-content-center">
      <form action="#" method="post" @change="onChange()">
        <div class="form-group first">
          Je suis un/une <br><br>
          <input type="radio" value="Femme" > Femme
          <input type="radio" value="Homme" > Homme
        </div>

        <div class="form-group last mb-4">
          Je recherche un/une <br><br>
          <input type="radio" value="Femme" > Femme
          <input type="radio" value="Homme" > Homme
        </div>


        <div class="form-group last mb-4">
          Age <br><br>
           de <input type="number" class="form-control" value="18" min="18">
           à <input type="number" class="form-control" value="75" min="18" >
        </div>

        <div class="form-group last mb-4">
          Pays
          <select class="form-control">
            <option>-- Choisissez --</option>
            <option>Suisse</option>
            <option>France</option>
          </select>
        </div>
        <input type="submit" value="Rechercher" id="button" class="btn btn-block btn-primary muted">
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

