<template>
<Layout>
  <div>
    <div v-for="edge in $page.localPosts.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
      <g-link :to= edge.node.path >Link Internal</g-link>
    </div>
    <div v-for="edge in $page.mediumPosts.edges.slice().reverse()" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
      <g-link :to= edge.node.path >Link Internal</g-link>
      <br>
      <g-link :to= edge.node.id >Link External </g-link>
      <p>---</p>
    </div>
  </div>
</Layout>
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
   localPosts: allLocalPost {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>