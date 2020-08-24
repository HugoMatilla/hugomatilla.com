<template>
  <div class="layout">
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
  background-color: #350e64;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%232a0b50' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%2320083c' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23150628' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%230b0314' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23000000' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

.layout-container {
  margin: 0 auto;
  min-height: 800px;
}

.button {
  border-radius: 0;
}

a {
  color: #fdd835;
}
a:hover{
  color:#fff3bb;
}
@font-face {
  font-family: Saira;
  src: url("../assets/Saira-Light.ttf");
  font-weight: normal;
}
@font-face {
  font-family: SourceCode;
  src: url("../assets/SourceCodePro-Light.ttf");
  font-weight: normal;
}
@font-face {
  font-family: Bitter;
  src: url("../assets/Bitter-VariableFont_wght.ttf");
  font-weight: normal;
}
.footer{
  background-color: black;
}

.subtitle strong {
  font-weight: bold;
  color:white;
}
</style>

<style>
@keyframes textShadow {
  0% {
    text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  5% {
    text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  10% {
    text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  15% {
    text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  20% {
    text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  25% {
    text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  30% {
    text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  35% {
    text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  40% {
    text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  45% {
    text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  50% {
    text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  55% {
    text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  60% {
    text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  65% {
    text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  70% {
    text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  75% {
    text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  80% {
    text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  85% {
    text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  90% {
    text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  95% {
    text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  100% {
    text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
}

.crt {
  animation: textShadow 3s linear;
}
.button-crt{
  animation: textShadow 1.6s infinite;
}
</style>
