<script>
export default {
  data() {
    return {};
  },
  props: {
    cardHowMany:Object,
  },
};
</script>

<template>
  <div class="card card-top">
    <img :src="cardHowMany.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h2 class="total">{{ cardHowMany.totalNumbers }}</h2>
      <h7 class="card-title">{{ cardHowMany.type }}</h7>
    </div>
  </div>
</template>

<style lang="scss" scoped as *>
@use "../style/partials/mixins" as *;

.card-top {
  max-width: 200px;
  max-height: 200px;
   display: flex;
   align-items: center;
  text-align: center;
  background-color: transparent;
  color: var(--white);
  .card-img-top {
    width: 15%;
    filter: invert(95%) sepia(0%) saturate(19%) hue-rotate(14deg)
      brightness(105%) contrast(104%);
  }
  .card-title{
    font-size: 0.7rem;
    font-weight:600;
  }
}
</style>
