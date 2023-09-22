<script>
export default {
  data() {
    return {
      slider: [
        {
          id: 1,
          img: "/imgs/assets/artist_development_and_production.jpg",
        },
        {
          id: 2,
          img: "/imgs/assets/consequence_of_sound_make_us.jpg",
        },
        {
          id: 3,
          img: "/imgs/assets/dancing_astronaut_bounce_ipsum.jpg",
        },
        {
          id: 4,
          img: "/imgs/assets/drowned_in_sound_feel_joy.jpg",
        },
      ],
      currentSlide: 0,
      autoPlayValue: false,
    };
  },
};
</script>

<template>
  <div class="container-jumbo">
    <div class="text-video">
      <div class="opacity">
        <h5>INSTRUMENTAL ROCK</h5>
      </div>
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
    .opacity{
      max-width: 676.5px;
    background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
