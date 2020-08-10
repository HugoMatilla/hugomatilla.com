<template>
<Layout>
  <div>
    <h1 v-html="$page.mediumPost.title" />
    <div v-html="$page.mediumPost.content_encoded" />
  </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  mediumPost(id: $id) {
    title
    content_encoded
  }
}
</page-query>