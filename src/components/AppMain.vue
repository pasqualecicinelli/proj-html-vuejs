<script>
import MusicList from "./Card/MusicList.vue";

export default {
  data() {
    return {};
  },
  components: { MusicList },
};
</script>

<template>
  <main>
    <div class="container-general">
      <section class="content-section">
        <MusicList />
      </section>

      <div class="content-text">
        <div class="text-video">
          <h5>WHO WE ARE</h5>
          <h2>SENSE THE JAZZ</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium corrupti, excepturi amet quam eos illum quibusdam
            aliquam beatae nostrum neque mollitia iure, id suscipit! Fugit
            sapiente numquam adipisci animi libero.
          </p>
          <button class="button-general mt-3"><h6>READ MORE</h6></button>
        </div>
      </div>
    </div>

    <div class="container-jumbo">
      <div class="play">
        <span><font-awesome-icon icon="fa-solid fa-play" /></span>
        <h2>NEW MUSIC VIDEO</h2>
      </div>
    </div>

    <div class="container-general">

    <!--<MusicList />-->  

    </div>
  </main>
</template>

<style lang="scss" scoped as *>
@use "../components/style/partials/mixins" as *;
.container-general {
  .content-section {
    display: flex;
    flex-direction: row;
  }
  .content-text {
    @include center();
    text-align: center;
    margin-top: 5rem;
  }
}

.container-jumbo {
  @include center();
  background-image: url(/imgs/assets/Video.jpg);
  .play {
    text-align: center;
    span {
      width: 50px;
      height: 50px;
      display: inline-block;
      border-radius: 50%;
      border: 2px solid var(--orange);
      line-height: 50px;

      .fa-play {
        font-size: 1rem;
        color: var(--orange);
      }
    }
    h2 {
      font-size: 3rem;
      color: var(--white);
      padding: 1rem 0;
    }
  }
}
</style>
