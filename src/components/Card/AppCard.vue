<script>
export default {
  data() {
    return {};
  },
  props: {
    cardInfo: Object,
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
</template>

<style lang="scss" scoped as *>
@use "../style/partials/mixins" as *;

.card-top {
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  margin-top: -100px;
  border-radius: 0;
  text-align: center;
  background-color: var(--backTopButton);
  color: var(--white);
  .card-img-top {
    width: 20%;
    filter: invert(95%) sepia(0%) saturate(19%) hue-rotate(14deg)
      brightness(105%) contrast(104%);
  }
}
</style>
