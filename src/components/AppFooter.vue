<script>
import BestMusicList from "./Card/BestMusicList.vue";
import PictureIngList from "./Card/PictureIngList.vue";
import GeneralInfoList from "./Card/GeneralInfoList.vue";

export default {
  data() {
    return {};
  },
  components: { BestMusicList, PictureIngList, GeneralInfoList },
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

    <section>
      <div class="container-info">
        <GeneralInfoList />

        <div class="container-form">
          <h3>NEWSLETTER</h3>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"></label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
              style="padding-left: 15px"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"></label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Message"
              rows="3"
              style="padding-left: 15px"
            ></textarea>
          </div>
          <button class="button-general" type="submit">SEND MESSAGE</button>
        </div>
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
.container-picture-ins {
  max-width: 100%;
  max-height: 200px;
}

.container-info {
  width: 100%;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  background-color: var(--black);
  color: var(--white);
  .form-control {
    padding: 1rem 6rem;
  }
  .button-general {
    width: 70%;
    height: 50px;
    font-size: 0.75rem;
  }
}
</style>
