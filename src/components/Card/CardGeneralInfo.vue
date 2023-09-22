<script>
export default {
  data() {
    return {};
  },
  props: {
    cardBooking: Object,
  },
};
</script>

<template>
  <div class="card">
    <h3>{{ cardBooking.title }}</h3>
    <p>
      {{ cardBooking.location }}
    </p>
    <span>{{ cardBooking.postalCode }}</span>
    <span>{{ cardBooking.email }}</span>

    <div class="container-icons">
      <div class="icons" v-for="icon in cardBooking.icons">
        <img :src="icon" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped as *>
@use "../style/partials/mixins" as *;

.card {
  display: flex;
  max-width: 300px;
  background-color: var(--black);
  color: var(--white);
  .container-icons {
    display: flex;
    
    padding-top: 2rem;
    .icons {
      width: 15%;
      img {
        width: 15px;
        filter: invert(95%) sepia(0%) saturate(19%) hue-rotate(14deg)
          brightness(105%) contrast(104%);
      }
    }
  }
}
</style>
