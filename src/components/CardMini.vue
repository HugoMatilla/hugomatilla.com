<template>
  <div class="clip card container">    
    <div class="item content-mini">
      <div class="content-item">
        <p v-html="node.title" class="content-text title is-5"></p>
        <p v-html="node.subtitle" class="content-text subtitle is-6"></p>
      </div>
      <footer class="card-footer content-footer">
        <g-link class="card-footer-item" :href="node.link">{{node.buttonTitle}}</g-link>
      </footer>
    </div>
    <figure class="item item-center is-3by4">
      <p class="image is-96x96">     
        <img :src="node.image.src" alt="Placeholder image" />
      </p>
    <b-tag class="badge">{{node.badges[0]}}</b-tag>
    </figure>
  </div>
</template>

<script>
export default {
  name: "CardMini",
  props: ["node"],
};
</script>
<style scoped lang="scss">
/* @import "~/assets/styles.scss"; */
$card-bg: #fdd835;
.clip {
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% 100%,
    50px 100%,
    0 calc(100% - 50px)
  );
  background: $card-bg;
}
.container {
  display: flex;
}

.item {
  height: 170px;
}

.item-center {
  flex-grow: 1; /* Set the middle element to grow and stretch */
}

.content-mini {
  height: 170px;
  display: flex;
  flex-direction: column;
}
.content-footer {
  margin-top: auto;
}

.hero .title {
  color: black;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
}
.hero .subtitle {
  color: black;
  margin-left: 1em;
  margin-right: 1em;
}
.badge{
  position: absolute;
  left: 62%;
  top: 8%;
}
.badge {
  margin-right: 2px;
  background-color: #4a148c;
  color: white;
}
img{
  max-width: 96px;
  min-height: 170px;
  object-fit: cover;
}
a{
  color:#4a148c;
}
</style>