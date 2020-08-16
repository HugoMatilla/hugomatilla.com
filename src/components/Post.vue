<template>
  <div>
    <p class="title is-1">{{title}}</p>
    <div class="column is-narrow" v-for="edge in edges" :key="edge.node.id">
      <article class="media">
        <CardMini :node="edge.node" />
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{edge.node.title}}</strong>
              <small>@Medium</small>
              <!-- <br />{{edge.node.content}} -->
            </p>
          </div>
        </div>
      </article>
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
.column{
  background: gray;
}
</style>