<script>
import CardHowMany from "./CardHowMany.vue";
import { howManyList } from "../../data/store.js";

export default {
  data() {
    return {
      howManyList,
    };
  },
  components: { CardHowMany },
};
</script>

<template>
  <section>
    <CardHowMany
      v-for="howMany in howManyList.list"
      :key="howMany.id"
      :cardHowMany="howMany"
    />
  </section>
</template>

<style lang="scss" scoped as *>

section{
  display: flex;
  align-items: center;
}

</style>
