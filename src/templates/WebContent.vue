<template>
<Layout>
  <div>
    <h1 v-html="$page.webContent.title" />
    <div v-html="$page.webContent.content" />
  </div>
  </Layout>
</template>
<style>
</style>
<page-query>
query ($id: ID!) {
  webContent(id: $id) {
    title
    content
  }
}
</page-query>