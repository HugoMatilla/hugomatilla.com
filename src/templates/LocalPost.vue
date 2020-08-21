<template>
<Layout class="bg">
  <div class ="container post-container">
    <p class="title is-1" v-html="$page.localPost.title" />
    <div v-html="$page.localPost.content" />
  </div>
  </Layout>
</template>
<style>
.icon {
  width: 0;
}
h1 {
  font-size: 2.5em;
  text-decoration:underline;
  margin-top: 32px;
}
h2 {
  font-size: 2em;
}
h3 {
  font-size: 1.75em;
}
h4 {
  font-size: 1.5em;
}
p {
  font-size: 1.25em;
  line-height: 1.4em;
}
</style>
<style scoped>
body{
   font-family: SourceCode !important;
   font-family: serif;
}
.title{
  color:white;
}
.bg{
background-color: #1a1d1e;
}

</style>
<style>
.post-container{
  padding-top: 24px ;
  max-width: 840px; 
  padding: 12px;
}
.g-image{
  margin: 24px;
  object-fit:contain;
  max-width: 70%;
  max-height: 700px;
  text-align: center;
}
blockquote{
background: #Ffffff11;
padding: 12px;
border:0px;
border-left: 2px;
border-style: solid;
border-color: #fdd835;
border-radius: 2px;
font-style: italic;
margin-bottom: 8px;
}
blockquote > ul {
    list-style: none;
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