<template>
<Layout>
  <div class="post-container">
    <h1 v-html="$page.mediumPost.title" />
    <div v-html="$page.mediumPost.content_encoded" />
  </div>
  </Layout>
</template>
<style scoped>
.post-container{
  padding-top: 24px ;
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;
}
</style>
<page-query>
query ($id: ID!) {
  mediumPost(id: $id) {
    title
    content_encoded
  }
}
</page-query>