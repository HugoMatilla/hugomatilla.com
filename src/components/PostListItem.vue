<template>
  <div class="notification">
    <article class="media">
      <figure class="media-left is-hidden-mobile">
        <p class="image is-128x128">
          <img :src="edge.node.image.src" alt="Placeholder image" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <div class="title is-4">{{edge.node.title}}</div>
          <div class="title is-6">{{edge.node.dateStr}}</div>
          <div class="title is-5">
            <i>{{edge.node.summary}}</i>
          </div>
          <g-link class="button is-outlined is-warning is-hidden-tablet" :to="edge.node.path">Read</g-link>&nbsp;&nbsp;
        </div>
      </div>
      <figure class="media-right">
        <g-link class="button is-outlined is-warning is-hidden-mobile" :to="edge.node.path">Read</g-link>&nbsp;&nbsp;
      </figure>
    </article>
  </div>
</template>

<script lang="ts">
export default {
  name: "PostListItem",
  props: ["edge"],
};
</script>

<style scoped>
.title {
  color: white;
}
.notification {
  margin-bottom: 16px;
  background: #000000aa;
}
img {
  max-width: 180px;
  min-height: 120px;
  object-fit: cover;
}
</style>