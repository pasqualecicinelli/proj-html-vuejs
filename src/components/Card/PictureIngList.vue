<script>
import CardPictureIng from "./CardPictureIng.vue";
import { picturesIngList } from "../../data/store.js";

export default {
  data() {
    return {
      picturesIngList,
    };
  },
  components: { CardPictureIng },

  //NON FUNZIONA SLIDER
  methods: {
    goNext() {
      if (picturesIngList.currentSlide < picturesIngList.list.length - 1) {
        picturesIngList.currentSlide++;
      } else {
        picturesIngList.currentSlide = 0;
      }
    },
    goPrev() {
      if (picturesIngList.currentSlide > 0) {
        picturesIngList.currentSlide--;
      } else {
        picturesIngList.currentSlide = picturesIngList.list.length - 1;
      }
    },
  },
};
</script>

<template>
  <section class="picture-ing">
    <CardPictureIng
      v-for="pictureIng in picturesIngList.list"
      :key="pictureIng.id"
      :cardPictureIng="pictureIng"
    />

    <!--  <button @click="goPrev()">Prev</button>
    <button @click="goNext()">Next</button>
    v-for="(pictureIng, index) in picturesIngList.list" :key="index" :class="{ 'slide': true, 'active': picturesIngList.currentSlide === index }"
  --></section>
</template>

<style lang="scss" scoped as *>
.picture-ing {
  display: flex;
  flex-direction: row;
}

/*
.active {
  display: block;
}
.slide{
  display: none;
}*/
</style>
