<template>
  <div>
    <h1 v-html="$page.mediumPost.title" />
    <div v-html="$page.mediumPost.content_encoded" />
  </div>
</template>

<page-query>
query ($id: ID!) {
  mediumPost(id: $id) {
    title
    content_encoded
  }
}
</page-query>