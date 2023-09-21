<script>
import CardBestMusic from "./CardBestMusic.vue";
import { bestMusicList } from "../../data/store.js";

export default {
  data() {
    return {
      bestMusicList,
    };
  },
  components: { CardBestMusic },
};
</script>

<template>
  <section>
    <CardBestMusic
      v-for="bestMusic in bestMusicList.list"
      :key="bestMusic.id"
      :cardBestMusic="bestMusic"
    />
  </section>
</template>

<style lang="scss" scoped as *>

section{
  display: flex;
  gap: 1rem;
 
}

</style>
