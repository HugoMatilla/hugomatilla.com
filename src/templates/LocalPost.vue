<template>
<Layout>
  <div class ="post-container">
    <h1 v-html="$page.localPost.title" />
    <div v-html="$page.localPost.content" />
  </div>
  </Layout>
</template>
<style>
.post-container{
  max-width: 1080px;
  background: black ;
}
.g-image{
  margin: 24px;
}
p{
  font-size:2em;
}
</style>
<page-query>
query ($id: ID!) {
  localPost(id: $id) {
    title
    content
  }
}
</page-query>