<template>
  <div class="hero-body">    
    <div v-for="edge in $static.data.edges" :key="edge.node.id">
      <div class="columns">
      <div class="card-avatar column is-one-quarter">
        <img class="image-filter" :src="edge.node.image.src" />
      </div>
      <div class="center-text column is-three-quarters">
      <h2  v-html="edge.node.title"/>
      <br>
      <div class="center-text" v-html="edge.node.content " />
    </div>
    </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<style scoped>
.card-avatar {
  max-width: 25vh;
  min-width: 20vh;
  margin: auto;
}
.image-filter {
  clip-path: polygon(
    0 0,
    calc(100% - 40px) 0,
    100% 40px,
    100% 100%,
    40px 100%,
    0 calc(100% - 40px)
  );
  filter: hue-rotate(220deg);
}
.center-text {
  text-align: left;
  font-size: 1.25em;
  line-height: 2.5em;
}
.hero-body{
  margin: 25px;
}
</style>


<static-query>
query {
  data: allWebContent(filter: { categories: { contains: ["intro"] }}){
    edges {
      node {
        title
        content
        image
      }
    }
  }
}
</static-query>