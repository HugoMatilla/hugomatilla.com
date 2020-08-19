<template>
  <section class="hero-body">
    <div class="projects-mini">
      <b-collapse :open="false" aria-id="contentIdForA11y1" animation="slide" class="center">
        <a class="button is-primary is-large " slot="trigger" aria-controls="contentIdForA11y1">Click here to see more projects I worked in.</a>
        <br>
      <div class="tile is-ancestor ">
          <article class="tile is-child is-4 notification is-yellow titleTile">
            <p class="title is-1">{{title}}</p>
            <p class="subtitle">Top tile</p>
          </article>
          <article class="tile is-child"></article>
        </div>
        <div class="container">
          <div class="tile is-ancestor">
            <article class="tile is-child is-2" />
            <article class="tile is-child">
              <div class="columns is-multiline">
                <div
                  class="column is-narrow is-6-tablet is-4-desktop"
                  v-for="edge in edges"
                  :key="edge.node.id"
                >
                  <CardMini :node="edge.node" />
                </div>
              </div>
            </article>
          </div>
          </div>
      </b-collapse>
    </div>
  </section>
</template>

<style scoped>
.title,
.subtitle {
  color: black;
}
.is-yellow {
  background: #fdd835;
}
.projects-mini {
  margin-top: 50px;
}
.container {
  margin-top: 1.5em;
}
.titleTile{
  background: #fdd835;
  clip-path: polygon(
    0 0,
    100% 0,
    calc(100% - 40px) 100%,
    100% 100%,
    0px 100%,
    0 0
  );
}
.center{
  text-align: center;
}

</style>

<script lang="ts">
import CardMini from "./CardMini.vue";
export default {
  name: "ProjectsMiniCollapsed",
  props: ["title", "edges"],
  components: {
    CardMini,
  },
};
</script>