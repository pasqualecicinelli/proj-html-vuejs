<script>
import BestMusicList from "./Card/BestMusicList.vue";
import PictureIngList from "./Card/PictureIngList.vue";

export default {
  data() {
    return {};
  },
  components: { BestMusicList, PictureIngList },
};
</script>
<template>
  <footer>
    <section>
      <div class="container-best-music py-5">
        <div class="text-video text-center">
          <h5>MUSIC BLOG</h5>
          <h2>BEST MUSIC BLOG</h2>
        </div>
        <BestMusicList />
      </div>
    </section>

    <section>
      <div class="container-picture-ins">
        <PictureIngList />
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped as *>
.container-best-music {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 700px;
  background-color: var(--black);

  .text-video {
    h5 {
      font-size: 0.75rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
}
.container-picture-ins{
  max-width: 100%;
  max-height:200px;
}
</style>
