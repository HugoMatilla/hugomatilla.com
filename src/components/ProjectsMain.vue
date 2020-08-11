<template>
  <div class="columns">
    <div class="column" v-for="edge in $static.data.edges" :key="edge.node.id">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="edge.node.image.src" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p v-html="edge.node.title" class="title is-4"></p>
              <p class="subtitle is-6"></p>
            </div>
          </div>
          <div class="content">
            <p v-html="edge.node.subtitle" />
            <b-taglist>
              <section v-for="badge in edge.node.badges">
                <b-tag type="is-primary" class="badge">{{badge}}</b-tag>
              </section>
            </b-taglist>
          </div>
        </div>
        <footer class="card-footer">
          <g-link  class="card-footer-item" :to=edge.node.linkPost>Info</g-link>
          <g-link  class="card-footer-item" :href="edge.node.linkProject">Visit</g-link>
        </footer>
      </div>
    </div>
  </div>
</template>
<style scoped>
.badge {
  margin-right: 4px;
}
</style>

<static-query>
query {
  data: allWebContent(filter: { categories: { in: ["projects"] }}, sortBy: "priority", order: DESC){
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