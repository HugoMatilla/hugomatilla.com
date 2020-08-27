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
  margin-top: 32px;
}
h3 {
  font-size: 1.75em;
  margin-top: 24px;
}
h4 {
  font-size: 1.5em;
  margin-top: 24px;
}
p {
  font-size: 1.25em;
  line-height: 1.25em;
}
.post-container {
  font-family: Bitter !important;
}
.post-container p {
  font-family: Bitter !important;
  line-height: 1.6em;
}
.number {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: transparent;
    border-radius: 0;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 1rem;
    height: 1.5rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right:0;
    min-width: 0;
    padding: 0;
    text-align: center;
    vertical-align: center;
}

</style>
<style scoped>

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
  margin: 24px 0 24px 0;
  object-fit:contain;
  max-height: 550px;
  /* max-width: 70%; */
  text-align: center;
  display:flex;
  justify-content:center;
  align-items:center;
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
margin-bottom: 1rem;
margin-top: 1rem;
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
  font-family: SourceCode !important;
  background-color:#ffffff18;
  border-radius: 4px; 
  color:white;
}
</style>
<style>
iframe {
  height: 225px;
  width: 400px;
}
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
    margin-bottom: 1.6rem;
    max-width: 100%;
    overflow: auto;
    padding: 1rem 1.5rem;
    display: block;
    word-wrap: break-word;
}
pre code{
  font-family: SourceCode !important;
}
iframe {
  height: 225px;
  width: 400px;
}
</style>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.localPost.title,
      meta: [
        { key: "twitter:title", name: "twitter:title", content: this.$page.localPost.title},
        { key: "twitter:image", name: "twitter:image", content: "hugomatilla.com" + this.$page.localPost.image.src },
        { key: "og:description", name: "og:description", content: this.$page.localPost.title},
        { key: "og:image", name: "og:image",  content: "hugomatilla.com" + this.$page.localPost.image.src}
      ],
    }
  }
}
</script>

<page-query>
query ($id: ID!) {
  localPost(id: $id) {
    title
    content
    image
  }
}
</page-query>