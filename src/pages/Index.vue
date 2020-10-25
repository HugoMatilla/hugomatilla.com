<template>
  <Layout class="crt">
    <SectionBase class="is-fullheight bg-intro">
      <Intro />
      <ProjectsMain title="Featured Projects" />
    </SectionBase>
    <SectionFullWidth class="bg1">
      <ProjectsMini title="More Projects" :edges="$static.projects.edges.slice(0,3)" bg="bg1" />
    </SectionFullWidth>
    <SectionFullWidth class="bg1">
      <ProjectsMiniCollapsed :edges="$static.projects.edges.slice(3)" />
    </SectionFullWidth>
    <SectionBase class="is-fullheight bg3">
      <LatestPost title="My Latest Post" :edges="$static.lastPosts.edges" />
    </SectionBase>
    <SectionFullWidth class="bg2">
      <ProjectsMini title="Open Source" :edges="$static.open.edges.slice(0,3)" bg="bg2" />
    </SectionFullWidth>
    <SectionFullWidth class="bg2">
      <ProjectsMiniCollapsed :edges="$static.open.edges.slice(3)" bg="bg2" />
    </SectionFullWidth>
  </Layout>
</template>

<script>
import Intro from "~/components/Intro.vue";
import ProjectsMain from "~/components/ProjectsMain.vue";
import ProjectsMini from "~/components/ProjectsMini.vue";
import ProjectsMiniCollapsed from "~/components/ProjectsMiniCollapsed.vue";
import LatestPost from "~/components/LatestPost.vue";
import SectionBase from "~/layouts/SectionBase.vue";
import SectionFullWidth from "~/layouts/SectionFullWidth.vue";
export default {
  metaInfo: {
    title: "Hugo Matilla",
  },
  components: {
    Intro,
    ProjectsMain,
    ProjectsMini,
    ProjectsMiniCollapsed,
    LatestPost,
    SectionBase,
    SectionFullWidth,
  },
  methods: {
      showSafariPopUp: function () {
        if (process.isClient()){
          var isSafari = navigator.vendor.toLowerCase().indexOf('apple') > -1
          if(isSafari && localStorage.getItem("dismissSafariToast")==null){ 
          this.$buefy.snackbar.open({
              message: `This site looks better in Chrome or FireFox `,
              type: 'is-warning',
              position: 'is-top',
              duration: 5000,
              actionText: "Dismiss",
              onAction: () => { localStorage.setItem("dismissSafariToast", true); }})
          }
        }
      }
  },
  mounted() {
    setTimeout(this.showSafariPopUp, 1500)
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.nav__link a {
  margin-right: 10rem;
}
</style>
<style scoped>
.bg-intro {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.78'%3E%3Cpolygon fill='%2308050f' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23110a1e' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23190f2d' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%2322143c' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%232a194b' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.hero {
  background-attachment: fixed; /*  */
  background-size: cover;
}
.hero-body {
  padding-left: 0;
}
.bg1 {
  background-image: url("https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2593&q=80");
}
.bg2 {
  background-image: url("https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80");
}
.bg3 {
  background-color: #181a1b;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23181a1b' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%231d1f20' href='%23s' y='2'/%3E%3Cuse fill='%231d1f20' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23212324' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23212324' href='%23s'/%3E%3Cuse fill='%23262829' href='%23s' x='2'/%3E%3Cuse fill='%23262829' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%232a2c2d'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%232a2c2d'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%232f3132'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23181a1b'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23343536'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%234a148c'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%234a148c'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%234a148c'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
<static-query>
query {
  open:  allWebContent(filter: { categories: { contains: ["open"] }}, sort: { by: "priority", order: DESC}){
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
  projects:  allWebContent(
    filter: { 
        categories: {contains: ["projects"] },
        },
    sort: { by: "priority", order: DESC})
    {
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