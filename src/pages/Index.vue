<template>
  <Layout>
    <br>
    <CardBig />
    <br>
    <ProjectsMain />
    <ProjectsMini title="Recent Proyects" :edges="$static.recent.edges"/>
    <Post title="Latest Posts" :edges="$static.mediumPosts.edges"/>
    <ProjectsMini title="Open Source Proyects" :edges="$static.open.edges"/>
    <ProjectsMini title="Old Proyects" :edges="$static.old.edges"/>
  </Layout>
</template>

<script>
import CardBig from '~/components/CardBig.vue'
import ProjectsMain from '~/components/ProjectsMain.vue'
import ProjectsMini from '~/components/ProjectsMini.vue'
import Post from '~/components/Post.vue'
export default {
  metaInfo: {
    title: 'Hugo Matilla'
  },
   components: {
    CardBig, 
    ProjectsMain,
    ProjectsMini,
    Post
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<style>
.nav__link a {
  margin-right: 10rem;
}
</style>
<static-query>
query {
  open:  allWebContent(filter: { categories: { contains: ["projects","open"] }}){
    edges {
      node {
       title
       subtitle
       image
       badges
       link
       buttonTitle	
      }
    }
  }
  recent:  allWebContent(filter: { categories: { contains: ["projects","recent"] }}){
    edges {
      node {
       title
       subtitle
       image
       badges
       link
       buttonTitle	
      }
    }
  }
  old:  allWebContent(filter: { categories: { contains: ["projects","old"] }}){
    edges {
      node {
       title
       subtitle
       image
       badges
       link
       buttonTitle	
      }
    }
  }
  mediumPosts: allMediumPost(limit:1, sort: { by: "isoDate", order: DESC}) {
    edges {
      node {
        id
        title
        path
        isoDate
      }
    }
  }
}
</static-query>