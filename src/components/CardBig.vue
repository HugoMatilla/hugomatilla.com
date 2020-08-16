<template>
  <div class="card card-big">
    <div class="card-content">
      <div v-for="edge in $static.data.edges" :key="edge.node.id">
        <div class="card-avatar">
          <img class="image-filter" :src="edge.node.image.src" />
        </div>
        <div class="center-text" v-html="edge.node.content " />
      </div>
    </div>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,64L144,224L288,224L432,32L576,192L720,64L864,128L1008,192L1152,32L1296,160L1440,96L1440,320L1296,320L1152,320L1008,320L864,320L720,320L576,320L432,320L288,320L144,320L0,320Z"></path></svg> -->
  </div>
</template>
<style scoped>
.card-avatar {
  max-width: 20vh;
  min-width: 20vh;
  margin: auto;
  margin-top: -150px;
}
.card-big {
  margin-top: 150px;
  
}
.image-filter {
  clip-path: polygon(0 0,  calc(100% - 40px) 0, 100% 40px,100% 100%, 40px 100%, 0 calc(100% - 40px));
  /* border: 2px; */
  /* border-style: groove; */
  /* border-color: blue; */
  filter: hue-rotate(220deg);
}
.center-text {
  text-align: center;
  font-size: 1.25em;
  line-height: 2.5em;
}
</style>

<static-query>
query {
  data: allWebContent(filter: { title: { in: ["intro"] }}){
    edges {
      node {
        content
        image
      }
    }
  }
}
</static-query>