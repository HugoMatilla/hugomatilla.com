<template>
  <div id='project-card' class="card clip">
        <div class="card-image">
          <figure class="image is-3by1">
            <img :src="node.image.src" alt="Placeholder image" />
          </figure>
          <b-taglist class="badges is-left">
              <section v-for="badge in node.badges">
                <b-tag class="badge">{{badge}}</b-tag>
              </section>
            </b-taglist>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="">
              <p v-html="node.title" class="title is-6"/>
              <p  v-html="node.subtitle" class="subtitle is-6"/>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <g-link  class="card-footer-item is-uppercase" :to=node.linkPost>Info</g-link>
          <g-link  class="card-footer-item is-uppercase" :to="node.linkProject">Visit</g-link>
        </footer>
      </div>
</template>

<script>
export default {
  name: 'Card',
  props: ["node"]
}
</script>
<style scoped lang="scss">
/* @import "~/assets/styles.scss"; */
$card-bg: #fdd835;
$primary: #4a148c;
.badge {
  margin-right: 2px;
  background-color: #4a148c;
  color: white;
  border-radius: 0;
  clip-path: polygon(0 0,  calc(100% - 6px) 0, 100% 6px,100% 100%, 6px 100%, 0 calc(100% - 6px));
}
.clip{
  clip-path: polygon(0 0,  calc(100% - 30px) 0, 100% 30px,100% 100%, 30px 100%, 0 calc(100% - 30px));
  background:$card-bg;
}
.badges{
  margin-top: -0.8em;
  position: relative;
  justify-content: flex-end;
}
.card-content{
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
  padding-bottom: 12px;
}
.image{
  clip-path: polygon(0% 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0%, 0% 0%);
  margin-bottom: 0px;
  margin-left: 3px;
  margin-right: 3px;
  border: 0px;
  border-top: 2px;
  border-style: solid;
  border-color:#fdd835;
}
img{
   object-fit: cover;
}
a{
  color:#4a148c;
}
</style>