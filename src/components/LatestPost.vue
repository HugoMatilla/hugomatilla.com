<template>
  <div class="hero-body">
    <div class="container">
      <p class="title">{{title}}</p>
      <div class="column is-narrow" v-for="edge in edges" :key="edge.node.id">
        <article class="media">
          <figure class="media-left is-hidden-mobile">
            <p class="image is-96x96">
              <img src="https://cdn-images-1.medium.com/max/1200/1*39p5t3gBIe_wdYeZq6aYyw.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
                <div class="title is-4">{{edge.node.title}}</div>
                <p class="title is-5">@ProAndroidDev</p>
                <div class="title is-6">{{edge.node.dateStr}}</div>
                <br>
                <div class="title is-5"><i>{{edge.node.summary}}</i></div>
                <br>
                <p>
                  <g-link  class="button button-crt is-outlined is-warning is-large m4" :to=edge.node.path>Continue Reading</g-link>
                  &nbsp;&nbsp;
                  <g-link  class="button  button-crt is-outlined is-warning is-large" to="/blog/">All Posts</g-link>
                  </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "LatestPost",
  props: ["title", "edges"],
};
</script>

<style scoped>
.title {
  color: white;
}
.container{
}
</style>