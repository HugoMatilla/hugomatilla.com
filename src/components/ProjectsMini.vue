<template>
  <div class="all">
    <div class="tile is-ancestor">
      <article
        class="title-section tile is-child is-4 notification is-yellow titleTile"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <p class="title is-1">{{title}}</p>
        <p class="subtitle"></p>
      </article>
      <article class="tile is-child"></article>
    </div>
    <div class="container">
      <div class="tile is-ancestor">
        <article class="tile is-child is-2" />
        <article class="tile is-child">
          <div class="columns is-multiline">
            <div
              data-aos="fade-up"
              data-aos-offset="400"
              class="column is-10-mobile is-offset-1-mobile is-6-tablet is-4-widescreen"
              v-for="edge in edges"
              :key="edge.node.id"
            >
              <CardMini :node="edge.node" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CardMini from "./CardMini.vue";
export default {
  name: "ProjectsMini",
  props: ["title", "edges"],
  components: {
    CardMini,
  },
};
</script>
<style scoped>
.title,
.subtitle {
  color: black;
}
/* .title-section:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -20px;
    background: url("https://www.cyberpunk.net/build/images/home/razor-bottom-yellow-d44fb6b7.svg") repeat-x 100% 0;
    height: 30px;
} */
.is-yellow {
  background: #fdd835;
}
.container {
  margin-top: 1.5em;
}
.titleTile {
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
.all{
  padding-right: 16px ;
}
</style>