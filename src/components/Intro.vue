<template>
  <div class="intro">
    <div v-for="edge in $static.data.edges" :key="edge.node.id">
      <div class="columns">
        <div class="card-avatar column is-one-quarter">
          <MyImageSafari v-if="isSafari" class ="image-filter" :imageUrl="edge.node.image.src"/>
          <MyImage v-else class ="image-filter" :imageUrl="edge.node.image.src"/>
        </div>
        <div class="column is-three-quarters">
          <p class="title" v-html="edge.node.title" />
          <div class="subtitle" v-html="edge.node.content " />
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<style scoped>
.card-avatar {
  max-width: 25vh;
  min-width: 20vh;
  margin: auto;
}
.image-filter {
  clip-path: polygon(
    0 0,
    calc(100% - 40px) 0,
    100% 40px,
    100% 100%,
    40px 100%,
    0 calc(100% - 40px)
  );
  filter: hue-rotate(0deg);
  filter:grayscale(0%);
}
.intro {
}

ul {
  list-style: none;
}
.title, .subtitle{
  color:white;
}
</style>

<script>
import MyImage from "./MyImage.vue";
import MyImageSafari from "./MyImageSafari.vue";
export default {
  components: {
    MyImage,
    MyImageSafari
  },
  computed: {
    isSafari: function(){ 
      if (process.isClient()){
        var isSafari = navigator.vendor.toLowerCase().indexOf('apple') > -1
        console.log("isSafari: " + isSafari)
        return isSafari
        }
      }
  }
};
</script>
<static-query>
query {
  data: allWebContent(filter: { categories: { contains: ["intro"] }}){
    edges {
      node {
        title
        content
        image
      }
    }
  }
}
</static-query>