<template>
  <!-- <div id="card-mini" class="card clip">
    <div class="columns is-mobile">
      <div class="column is-one-third">
          <img src="../content/web/imgs/va.jpg" alt="Placeholder image" />
      </div>
      <div class="column">
        <p v-html="node.title" class="title is-6"></p>
        <p v-html="node.subtitle" class="subtitle is-6"></p>
      </div>
    </div>
  </div>-->
  <div class="clip card">
    <div class="level">
      <figure class="level-left is-3by4">
        <p class="image is-96x96">
          <img src="../content/web/imgs/va.jpg" alt="Placeholder image" />
        </p>
      </figure>
      <div class="card-content">
        <div class="content">
          <p v-html="node.title" class="title is-6"></p>
          <p v-html="node.subtitle" class="subtitle is-6"></p>
          <!-- <g-link class :href="node.linkProject">Visit</g-link> -->
        </div>
      </div>
    
  </div>
  <footer class="card-footer">
      <g-link class="card-footer-item" :href="node.linkProject">Visit</g-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CardMini",
  props: ["node"],
};
</script>
<style scoped>
.clip {
  clip-path: polygon(
    0 0,
    calc(100% - 30px) 0,
    100% 30px,
    100% 100%,
    30px 100%,
    0 calc(100% - 30px)
  );
  background: #fdd835;
}
p {
  color: black !important;
}
.card-content {
  padding: 0px;
  padding-left: 16px;
  padding-right: 16px;
}

</style>