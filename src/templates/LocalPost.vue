<template>
<Layout>
  <div>
    <h1 v-html="$page.localPost.title" />
    <div v-html="$page.localPost.content" />
  </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  localPost(id: $id) {
    title
    content
  }
}
</page-query>