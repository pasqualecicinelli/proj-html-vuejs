<script>

import AppCardJazz from "./AppCardJazz.vue";
import { jazzList } from "../../data/store.js";

export default {
  data() {
    return {
     
      jazzList,
    };
  },
  components: { AppCardJazz },
};
</script>

<template>

 
    <AppCardJazz
      v-for="jazz in jazzList.list"
      :key="jazz.id"
      :cardJazz="jazz"
    />
  
</template>

<style lang="scss" scoped as *>
@use "../style/partials/mixins" as *;

</style>
