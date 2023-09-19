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
  <h1>main</h1>

  <!--SPOSTARE JUMBOTRON, SARA' FIGLIO DI MAIN-->

  <section>
    <MusicList />
  </section>

  <div class="container-jumbo"></div>

</template>

<style lang="scss" scoped></style>
