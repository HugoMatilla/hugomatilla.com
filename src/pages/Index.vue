<template>
  <Layout>
    <section class="hero is-fullheight is-intro">
      <div class="container">
        <Intro />
        <ProjectsMain title="Main Projects" />
      </div>
    </section>
    <section class="hero bg2">
      <ProjectsMini title="Recent Projects" :edges="$static.recent.edges" bg="bg1" />
    </section>
    <section class="hero bg2">
      <ProjectsMiniCollapsed title="More Projects" :edges="$static.old.edges" />
    </section>
    <section class="hero is-large bg3">
      <Post title="My Latest Post" :edges="$static.lastPosts.edges" />
    </section>
    <section class="hero is-medium bg1">
      <ProjectsMini title="Open Source ProJects" :edges="$static.open.edges" bg="bg2" />
    </section>
  </Layout>
</template>

<script>
import Intro from "~/components/Intro.vue";
import ProjectsMain from "~/components/ProjectsMain.vue";
import ProjectsMini from "~/components/ProjectsMini.vue";
import ProjectsMiniCollapsed from "~/components/ProjectsMiniCollapsed.vue";
import Post from "~/components/Post.vue";
export default {
  metaInfo: {
    title: "Hugo Matilla",
  },
  components: {
    Intro,
    ProjectsMain,
    ProjectsMini,
    ProjectsMiniCollapsed,
    Post,
  },
};
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
<style scoped>
.is-intro {
  background-color: #020008;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23080014' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%230e0020' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%2314002b' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%231a0037' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23200043' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.hero{
  background-attachment: fixed;
  background-size: cover;
}
.hero-body{
  padding-left: 0;
}
.bg1 {
  background-image: url("https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2593&q=80");
}
.bg2 {
  background-image: url("https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
}
.bg3 {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
}

</style>
<static-query>
query {
  open:  allWebContent(filter: { categories: { contains: ["projects","open"] }}, sort: { by: "priority", order: DESC}){
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
  recent:  allWebContent(filter: { categories: { contains: ["projects","recent"] }}, sort: { by: "priority", order: DESC}){
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
  old:  allWebContent(filter: { categories: { contains: ["projects","old"] }}, sort: { by: "priority", order: DESC}){
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
        content_encodedSnippet
      }
    }
  }
  lastPosts: allLocalPost(limit:1, sort: { by: "date", order: DESC}) {
    edges {
      node {
        id
        title
        path
        dateStr
        summary
        path
      }
    }
  }
}
</static-query>