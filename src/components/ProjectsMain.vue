<template>
  <div class="columns is-multiline">
    <div class="column is-4 is-narrow" v-for="edge in $static.data.edges" :key="edge.node.id">
      <Card :node="edge.node"/>
    </div>
  </div>
</template>
<static-query>
query {
  data: allWebContent(filter: { categories: {  contains: ["projects", "main"] }}, sortBy: "priority", order: DESC){
    edges {
      node {
        title
        subtitle
        content
        image
        badges
        linkProject
        linkPost
      }
    }
  }
}
</static-query>

<script lang="ts">
import Card from './Card.vue'
export default {
   components: {
    Card,
  }
}

</script>
<style scoped>
.columns{
  justify-content: center;
}
</style>