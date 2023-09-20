<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container-jumbo">
    <div class="text-video">
      <h5>INSTRUMENTAL ROCK</h5>
      <h1>MUSIC IN THIS VIDEO</h1>
      <button class="button-general"><h6>READ MORE</h6></button>

    </div>
  </div>
</template>

<style lang="scss" scoped as *>
@use "./style/partials/mixins" as *;
.container-jumbo {
  @include center();
  position: relative;
  background-image: url(/imgs/assets/artist_development_and_production.jpg);
  .text-video {
    text-align: center;
  }
}
</style>
