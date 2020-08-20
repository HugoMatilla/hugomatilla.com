<template>
  <div class="layout crt">
    <Nav />
    <div class="layout-container">
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
  mounted() {
    this.$AOS.init();
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
<style lang="scss">
/* @import "~/assets/styles.scss"; */
$primary: #4a148c;

.card-footer {
  border-top: 1px solid $primary;
}
.card-footer-item:not(:last-child) {
  border-right: 1px solid $primary;
}
</style>
<style>
body {
  font-family: Saira;
  margin: 0;
  color: aliceblue;
  padding: 0;
  line-height: 1.5;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%230b0111' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23150223' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23200434' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%232a0546' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23350657' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

.layout-container {
  margin: 0 auto;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  min-height: 800px;
  /* margin-bottom: 16px; */
}

h1 {
  font-size: 4em;
}
h2 {
  font-size: 3em;
}
h3 {
  font-size: 1.75em;
}
p {
  font-size: 1.25em;
}
.badge {
  margin-right: 2px;
  background-color: #4a148c;
  color: white;
}
</style>

<style>
@font-face {
  font-family: Saira;
  src: url("../assets/Saira-Light.ttf");
  font-weight: normal;
}
</style>

