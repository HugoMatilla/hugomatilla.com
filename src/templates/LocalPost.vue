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
  padding-top: 24px ;
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;
}
.g-image{
  margin: 24px;
  object-fit:contain;
  max-width: 70%;
  max-height: 700px;
  text-align: center;
}
strong{
  color:white;
}
ul {
    list-style: inherit;
}
p, li{
  font-size: 1.25em ;
}
code{
  background-color:#00000033;
  color:#aa0088;
}
</style>
<style>
.tag:not(body){
  background-color: transparent;
}
.token.tag{
  font-size: 1em;
}
pre {
    background: #111111;
    border: 1px solid #680045;
    border-radius: 12px;
    color: wheat;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
}
pre code{
  font-family: SourceCode !important;
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