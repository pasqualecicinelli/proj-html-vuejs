<script>
import AppCard from "./AppCard.vue";
import { buttonsList, jazzList } from "../../data/store.js";

export default {
  data() {
    return {
      buttonsList,
      jazzList,
    };
  },
  components: { AppCard },
};
</script>

<template>
  <section class="button-top">
    <AppCard
      v-for="button in buttonsList.list"
      :key="button.id"
      :cardInfo="button"
    />
  </section>

</template>

<style lang="scss" scoped as *>
.button-top {
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  gap: 1rem;
}
</style>
