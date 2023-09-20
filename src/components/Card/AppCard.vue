<script>
export default {
  data() {
    return {};
  },
  props: {
    cardInfo: Object,
    cardJazz: Object,
  },
};
</script>

<template>
  <div class="card card-top">
    <img :src="cardInfo.img" class="card-img-top change-color" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ cardInfo.title }}</h5>
      <p class="card-text">{{ cardInfo.description }}</p>
    </div>
  </div>

  <!--
  <div class="card card-jazz">
    <img :src="cardJazz.img" class="card-img-top change-color" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ cardJazz.title }}</h5>
      <p class="card-text">{{ cardJazz.whereStream }}</p>
    </div>
  </div>
  -->
  
</template>

<style lang="scss" scoped as *>
@use "../style/partials/mixins" as *;

.card-top {
  width: 250px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  margin-top: -100px;
  border-radius: 0;

  text-align: center;
  // background-color: var(--black);
  //color: var(--white);
  .card-img-top {
    width: 20%;
  }
}
</style>
