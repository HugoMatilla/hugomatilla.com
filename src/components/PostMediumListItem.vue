<template>
  <div class="notification">
    <article class="media">
      <figure class="media-left">
        <p class="image is-128x128 is-hidden-mobile">
          <img :src="getImage" alt="Placeholder image" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <div class="title is-4">{{edge.node.title}}</div>
          <div class="title is-6">{{edge.node.isoDate.substr(0,10)}} @ {{publisher}}</div>
          <g-link class="button is-outlined is-warning is-hidden-tablet" :to="edge.node.link">Read in Medium</g-link>&nbsp;&nbsp;
        </div>
      </div>
      <figure class="media-right is-hidden-mobile">
        <g-link class="button is-outlined is-warning" :to="edge.node.link">Read in Medium</g-link>&nbsp;&nbsp;
      </figure>
    </article>
  </div>
</template>

<script lang="ts">
export default {
  name: "PostMediumListItem",
  props: ["edge"],
  computed: {
    getImage: function () {
      if (this.edge.node.link.includes("proandroiddev"))
      return  "https://cdn-images-1.medium.com/max/1200/1*39p5t3gBIe_wdYeZq6aYyw.png"
      else if (this.edge.node.link.includes("itnext"))
      return "https://cdn-images-1.medium.com/max/1200/1*KCpf5X5s7-hXAU_geaugDA.png"
      else
      return "https://www.pngkey.com/png/full/48-483814_medium-logo-juan-garzn.png"
    },
    publisher: function (){
      if (this.edge.node.link.includes("proandroiddev"))
      return  "ProAndroidDev"
      else if (this.edge.node.link.includes("itnext"))
      return "ITNEXT"
      else
      return "Hugo Matilla"
    }
  }

};
</script>

<style scoped>
.title {
  color: white;
}
.notification {
  margin-bottom: 16px;
  background: #000000aa;
}
img {
  max-width: 180px;
  min-height: 120px;
  object-fit: cover;
}
</style>