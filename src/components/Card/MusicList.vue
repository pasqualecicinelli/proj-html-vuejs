<script>
import AppCard from "./AppCard.vue";
import { buttonsList } from "../../data/store.js";

export default {
  data() {
    return {
      buttonsList,
    };
  },
  components: { AppCard },
};
</script>

<template>
  <h1>musiclist</h1>

  <section>
    <AppCard v-for="button in buttonsList.list" :cardInfo="button" />
  </section>

  
</template>

<style lang="scss" scoped></style>
