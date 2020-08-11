<template>
  <div class="layout">
    <Nav />
    <div class="layout-container">
      <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: Inconsolata;
  margin: 0;
  color: aliceblue;
  padding: 0;
  line-height: 1.5;
  background-color: #083d55;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%2314cc4b' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%232696aa' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%2316c542' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%230085b0' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%2317be38' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%230071b4' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%2318b72e' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23005ab2' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%2318b123' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23263ea4' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%2318aa16' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23580d88' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
h1{
  font-size: 4em;
}
h2{
  font-size: 3em;
}
h3{
  font-size: 2em;
}
p {
  font-size: 1.25em;
}

.layout-container {
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 800px;
  margin-bottom: 16px;
}
</style>
<style>
@font-face {
  font-family: Inconsolata;
  src: url("../assets/Inconsolata-Medium.ttf");
  font-weight: normal;
}
</style>