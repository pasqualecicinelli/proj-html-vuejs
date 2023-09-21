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
};
</script>

<template>
  <section class="picture-ing">
    <CardPictureIng
      v-for="pictureIng in picturesIngList.list"
      :key="pictureIng.id"
      :cardPictureIng="pictureIng"
    />
  </section>
</template>

<style lang="scss" scoped as *>
.picture-ing{
  display: flex;
  flex-direction: row;
    
}
</style>
