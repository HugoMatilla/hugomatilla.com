<template>
  <Layout>
    <div class="all">
      <div class="blog is-centered">
        <h1 class="title">BLOG</h1>
        <h2
          class="subtitle"
        >Here you can find posts I wrote in Medium and others published in my personal blog</h2>
        <b-tabs v-model="activeTab" size="is-large" type="is-toggle" expanded>
          <b-tab-item label="Medium">
            <div v-for="edge in $page.mediumPosts.edges.slice().reverse()" :key="edge.node.id">
              <PostMediumListItem :edge="edge" />
            </div>
          </b-tab-item>
          <b-tab-item label="Blog">
            <div v-for="edge in $page.localPosts.edges" :key="edge.node.id">
              <PostListItem :edge="edge" />
            </div>
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
  </Layout>
</template>
<style scoped>
.blog {
  padding-top: 24px;
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;
  padding-left:8px ;
  padding-right:8px ;
}
.all {
  background-color: #181a1b;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23181a1b' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%231d1f20' href='%23s' y='2'/%3E%3Cuse fill='%231d1f20' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23212324' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23212324' href='%23s'/%3E%3Cuse fill='%23262829' href='%23s' x='2'/%3E%3Cuse fill='%23262829' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%232a2c2d'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%232a2c2d'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%232f3132'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23181a1b'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23343536'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%234a148c'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%234a148c'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%234a148c'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.title,
.subtitle {
  color: white;
}
</style>
<style>
.tabs.is-toggle li.is-active a {
  background-color: #fdd835;
  border-color: #fdd835;
  color: black;
  z-index: 1;
}
.tabs.is-toggle a {
  border-color: #fdd835;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0;
  position: relative;
  color: #fdd835;
}
.tabs.is-toggle a:hover {
  background-color: #fdd835;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0;
  position: relative;
  color: black;
}
</style>

<script>
import PostListItem from "~/components/PostListItem.vue";
import PostMediumListItem from "~/components/PostMediumListItem.vue";
export default {
  components: {
    PostListItem,
    PostMediumListItem,
  },
  // computed: {
  //   getSize: function () {
  //     var w = window.innerWidth;
  //     if (w > 768) return "is-large";
  //     else return "is-small";
  //   },
  // },
};
</script>
<page-query>
query {
  mediumPosts: allMediumPost {
    edges {
      node {
        id
        title
        path
        isoDate
        link
      }
    }
  },
   localPosts: allLocalPost(filter: { categories: { ne: "wip" }}){
    edges {
      node {
        id
        title
        path
        image
        dateStr
        summary
      }
    }
  }
}
</page-query>