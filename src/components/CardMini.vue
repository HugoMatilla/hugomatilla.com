<template>
  <div class="clip card container">    
    <div class="item content-mini">
      <div class="content-item">
        <p v-html="node.title" class="content-text title is-5"></p>
        <p v-html="node.subtitle" class="content-text subtitle is-6"></p>
      </div>
      <footer class="card-footer content-footer">
        <g-link class="card-footer-item" :to="node.link">{{node.buttonTitle}}</g-link>
      </footer>
    </div>
    <figure class="item item-center is-3by4">
      <p class="image">     
        <!-- <img :src="node.image.src" alt="Placeholder image" /> -->
        <ClientOnly>
          <b-image
            class="image img is-3by4"
            :src="node.image.src"
            :webp-fallback="node.fallbackImage.src"
            ratio="3by1"
          ></b-image>
          </ClientOnly>
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
    30px 100%,
    0 calc(100% - 30px)
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
  border-radius: 0;
  clip-path: polygon(0 0,  calc(100% - 6px) 0, 100% 6px,100% 100%, 6px 100%, 0 calc(100% - 6px));
}
.image{
  clip-path: polygon(0% 100%, 100% 100%, 100% 22px, calc(100% - 22px) 0%, 0% 0%);
  margin-bottom: 2px;
  margin-left: -1px;
  margin-right: 2px;
  border: 2px;
  border-style: solid;
  border-color:#fdd835;
  width: 96px;
}

.img{
  max-width: 96px;
  min-height: 165px;
  object-fit: cover;
}
a{
  color:#4a148c;
}
</style>