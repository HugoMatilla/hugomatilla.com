<template>
  <div>
    <div v-for="edge in $page.mediumPosts.edges.slice().reverse()" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
      <g-link :to= edge.node.path >Link Internal</g-link>
      <br>
      <g-link :to= edge.node.id >Link External </g-link>
    </div>
  </div>
</template>

<page-query>
query {
  mediumPosts: allMediumPost {
    edges {
      node {
        id
        title
        path
        isoDate
      }
    }
  },
}
</page-query>