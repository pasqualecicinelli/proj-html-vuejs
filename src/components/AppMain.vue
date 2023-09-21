<script>
import MusicList from "./Card/MusicList.vue";
import MusicListJazz from "./Card/MusicListJazz.vue";
import HowManyList from "./Card/HowManyList.vue";

export default {
  data() {
    return {};
  },
  components: { MusicList, MusicListJazz, HowManyList },
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

    <div class="container-jazz p-5">
      <div class="container">
        <div class="text-video">
          <h5>WHO WE ARE</h5>
          <h2>SENSE THE JAZZ</h2>
        </div>
        <MusicListJazz />
      </div>
    </div>

    <div class="container-album">
      <div class="text-video">
        <h5>INSTRUMENTAL ROCK</h5>
        <h2>ALBUM OUT NOW</h2>
        <button class="button-general">READ MORE</button>
      </div>
    </div>

    <div class="container-how-many">
      <HowManyList />
    </div>
  </main>
</template>

<style lang="scss" scoped as *>
@use "../components/style/partials/mixins" as *;
.container-general {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .content-section {
    display: flex;
    flex-direction: row;
  }
  .content-text {
    @include center();
    text-align: center;
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
.container-jazz {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 700px;
  background-color: var(--black);
  color: var(--white);
  .container {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    background-color: var(--black);
    color: var(--white);

    .text-video {
      text-align: center;
      width: 100%;
      h5 {
        font-size: 0.7rem;
      }
      h2 {
        padding: 0;
      }
    }
  }
}
.container-album {
  display: flex;
  align-items: center;
  padding-left: 6rem;
  background-image: url("/imgs/assets/cms_parallax.jpg");

  h2 {
    font-size: 4rem;
    padding-top: 0;
  }
}

.container-how-many {
  width: 100%;
  height: 300px;
  background-size: 80%;
  background-position: top;
  background-attachment: fixed;
  background-image: url("/imgs/assets/counter_parallax.jpg");
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
