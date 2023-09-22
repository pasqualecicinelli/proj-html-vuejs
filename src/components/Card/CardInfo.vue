<script>
export default {
  data() {
    return {};
  },
  props: {
    cardInfo: Object,
  },
};
</script>

<template>
  <div class="card">
    <ul>
      <li>
        <h3>{{ cardInfo.title }}</h3>
      </li>
      <li class="info-supp" v-for="infoList in cardInfo.list">
        {{ infoList }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped as *>
@use "../style/partials/mixins" as *;

.card {
  max-width: 300px;
  background-color: var(--black);
  color: var(--white);
}
ul {
  list-style: none;
  padding-left: 0;

  .info-supp {
    padding-top: 0.7rem;
  }
}
</style>
