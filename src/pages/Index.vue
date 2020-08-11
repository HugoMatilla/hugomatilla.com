<template>
  <Layout>
    <br>
    <CardBig />
    <br>
    <ProjectsMain />
  </Layout>
</template>

<script>
import Card from '~/components/Card.vue'
import CardBig from '~/components/CardBig.vue'
import ProjectsMain from '~/components/ProjectsMain.vue'
export default {
  metaInfo: {
    title: 'Hugo Matilla'
  },
   components: {
    Card,
    CardBig, 
    ProjectsMain
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
