<template>
  <b-navbar class="navbar" type="is-black">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1>Hugo Matilla</h1>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
             <g-link class="nav__link button is-dark" to="/blog/">Blog</g-link>
          <a class="button is-dark">
            <b-icon icon="twitter"></b-icon>
          </a>
          <a class="button is-dark">
            <b-icon icon="github"></b-icon>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<style scoped>
h1{
  font-size: 2em;
  color: white;
}
</style>
<style>
.navbar-burger{
  height: auto;
  color: white;
}
.navbar{
  background: #00000000;
}
</style>
