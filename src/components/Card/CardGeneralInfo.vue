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
    <div v-for="icon in cardBooking.icons">
      <img :src="icon" alt="" />
    </div>
  </div>


</template>

<style lang="scss" scoped as *>
@use "../style/partials/mixins" as *;

.card{
  max-width: 300px;
  background-color: var(--black);
  color: var(--white);

}
</style>
