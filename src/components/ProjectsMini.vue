<template>
<section class="hero">
  <div id="projects-mini">
    <p class="title is-1">{{title}}</p>
    <div class="columns is-multiline">
      <div class="column is-narrow is-6-tablet is-4-desktop" v-for="edge in edges" :key="edge.node.id">
        <CardMini :node="edge.node" />
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import CardMini from "./CardMini.vue";
export default {
  name: "ProjectsMini",
  props: ["title","edges"],
  components: {
    CardMini,
  },
};
</script>
<style scoped>
.title{
  color:white;
}
</style>