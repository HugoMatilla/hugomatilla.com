<template>
  <div class="card card-big">
    <div class="card-content">
      <div v-for="edge in $static.data.edges" :key="edge.node.id">
        <div class="card-avatar">
          <img class="rounded" :src="edge.node.image.src" />
        </div>
        <div class="center-text" v-html="edge.node.content " />
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-avatar {
  max-width: 20vh;
  min-width: 20vh;
  margin: auto;
  margin-top: -150px;
}
.card-big {
  margin-top: 150px;
}
.rounded {
  border-radius: 50%;
  /* border: 2px; */
  /* border-style: groove; */
  /* border-color: blue; */
  filter: hue-rotate(220deg);
}
.center-text {
  text-align: center;
  font-size: 1.25em;
  line-height: 2.5em;
}
</style>

<static-query>
query {
  data: allWebContent(filter: { title: { in: ["intro"] }}){
    edges {
      node {
        content
        image
      }
    }
  }
}
</static-query>