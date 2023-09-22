<script>
export default {
  data() {
    return {};
  },
  props: {
    cardPictureIng:Object,
  },
};
</script>

<template>
  <div class="card-top">
    <img :src="cardPictureIng.picture" class="card-img" alt="..." />
  </div>
</template>

<style lang="scss" scoped as *>
@use "../style/partials/mixins" as *;


.card-top {
  max-width: 170px;
  max-height: 170px;
   
 

  .card-img{
    width: 100%;
    
    
  }
  
}
</style>
