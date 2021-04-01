<template>
  <header>
    <div class="heading">
      <a href="/"><img class="Logo" alt="Vue logo" src="../assets/img/logo.png"></a>

      <div class="menu">
        <a class="ButtonMenu" href="#">Découvrir</a>
        <a class="ButtonMenu" href="#">Recherche</a>
        <a class="ButtonMenu" href="#">Match</a>
        <a class="ButtonLogin" href="/">Connexion</a>
      </div>
    </div>
  </header>
</template>

<style scoped>


a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

.Logo {
  height: 70px;
  margin-left: 10px;
  margin-right: 5px;
  margin-top: 10px;
}

.ButtonMenu, .ButtonLogin {
  background-color: #784FFF;
  border-left: 2px solid;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
}

.heading {
  display: flex;
}

header {
  display: block;
}

.menu {
  width: 90%;
  display: flex;
  text-align: center;
  flex-direction: row;
  margin: auto;
  height: 100%;
  vertical-align: middle;
}

</style>