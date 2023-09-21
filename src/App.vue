<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppJumbotron from "./components/AppJumbotron.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      navHeader: [
        {
          id: 1,
          title: "HOME",
        },
        {
          id: 2,
          title: "BLOG",
        },
        {
          id: 3,
          title: "EVENT",
          list: [
            "CHORAL MUSIC",
            "CHORAL MUSIC",
            "CHORAL MUSIC",
            "CHORAL MUSIC",
            "CHORAL MUSIC",
          ],
        },
        {
          id: 4,
          title: "GALLERY",
        },
        {
          id: 5,
          title: "ABOUT US",
        },
        {
          id: 6,
          title: "CONTACT US",
        },
        {
          id: 7,
          title: "SHOP",
          list: [
            "CHORAL MUSIC",
            "CHORAL MUSIC",
            "CHORAL MUSIC",
            "CHORAL MUSIC",
            "CHORAL MUSIC",
          ],
        },
      ],
    };
  },

  components: { AppHeader, AppMain, AppJumbotron, AppFooter },
  //methods: {
    //  foundTitle(searchTitle) {
    //  if (searchTitle.includes(musicTitle)) {
    // }
    // }

};
</script>

<template>
  <AppHeader :headerList="navHeader" @search-title="foundTitle" />

  <section>
    <AppJumbotron />
  </section>

  <section>
    <AppMain />
  </section>

  <AppFooter />
</template>

<style lang="scss" as * >
@use "../src/components/style/general.scss" as *;
</style>
