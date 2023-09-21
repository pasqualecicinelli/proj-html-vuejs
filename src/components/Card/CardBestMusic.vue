<script>
export default {
  data() {
    return {};
  },
  props: {
    cardBestMusic: Object,
  },
};
</script>

<template>
  <div class="card card-best-music">
    <img :src="cardBestMusic.img" class="card-img-middle" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ cardBestMusic.title }}</h5>
      <div class="card-date">
        {{ cardBestMusic.calendar }} {{ cardBestMusic.date }}
      </div>
      <p class="card-text">{{ cardBestMusic.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped as *>
@use "../style/partials/mixins" as *;

.card-best-music {
  width: 350px;
  aspect-ratio: 1;
  background-color: var(--black);
  color: var(--white);
  border: 0;
 gap: 0.5rem;
  .card-img-middle {
    width: 100%;
  }
  .card-body{
padding-left: 0;
    .card-date{
      color: var(--orange);
      padding: 0.5rem 0 ;
    }
    .card-text{
  color: var(--darkGrey);
    }
  }
  
}
</style>
