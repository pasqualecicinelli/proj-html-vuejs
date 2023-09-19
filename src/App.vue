<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppJumbotron from "./components/AppJumbotron.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },
  components: { AppHeader, AppMain, AppJumbotron, AppFooter },
};
</script>

<template>
  <AppHeader />

  <section>
    <AppJumbotron />
  </section>

  <section>
    <AppMain />
  </section>

  <AppFooter />
</template>

<style lang="scss" as * >
@use "../src/components/style/general.scss";

</style>
