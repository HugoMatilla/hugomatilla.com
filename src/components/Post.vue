<template>
  <div class="hero-body">
    <div class="container">
      <p class="title is-1">{{title}}</p>
      <div class="column is-narrow" v-for="edge in edges" :key="edge.node.id">
        <article class="media">
          <figure class="media-left">
            <p class="image is-96x96">
              <img src="https://cdn-images-1.medium.com/max/1200/1*39p5t3gBIe_wdYeZq6aYyw.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
                <div class="title is-2">{{edge.node.title}}</div>
                <p class="title is-4">@ProAndroidDev</p>
                <div class="title is-5">{{edge.node.dateStr}}</div>
                <br>
                <div class="title is-4"><i>{{edge.node.summary}}...</i></div>
                <br>
                <g-link  class="button is-primary is-outlined is-large" :to=edge.node.path>Continue reading it</g-link>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Post",
  props: ["title", "edges"],
};
</script>

<style scoped>
.title {
  color: white;
}
</style>