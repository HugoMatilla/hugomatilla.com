<template>
<div>
  </br></br>
 <figure class="item item-center is-3by4">
      <p class="image">     
        <img :src="imageUrl" alt="Placeholder image" />
  </p>
 </figure>
 </div>
  
</template>
<script>
export default {
  props: ["imageUrl"],
   computed: {
    getImage: function () {
     return "background-image: url('" + this.imageUrl + "');"
    },
  },
}
</script>
<style lang="scss">
.image{
  clip-path: polygon(0% 100%, 100% 100%, 100% 22px, calc(100% - 22px) 0%, 0% 0%);
  min-height: 165px;
  object-fit: cover;
}
</style>