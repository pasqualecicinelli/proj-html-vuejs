<script>
export default {
  data() {
    return {};
  },
  props: {
    cardJazz: Object,
  },
};
</script>

<template>
  <div class="card card-jazz">
    <img :src="cardJazz.img" class="card-img-middle" alt="..." />
    <div class="card-body text-center">
      <h6 class="card-title">{{ cardJazz.title }}</h6>
      <p class="card-text">{{ cardJazz.whereStream }}
        <div class="icons" v-for="icon in cardJazz.iconsMusic">
          <img :src="icon" alt="" />
        </div>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped as *>
@use "../style/partials/mixins" as *;

.card-jazz {
  width: 320px;
  aspect-ratio: 1;
  background-color: var(--black);
  color: var(--white);
  .card-img-middle {
    width: 100%;
  }
  .card-text{
  display: flex;
  color: var(--darkGrey);
 
  .icons {
    width: 13%;
    img{
      width: 15px;
    filter: invert(95%) sepia(0%) saturate(19%) hue-rotate(14deg) brightness(105%) contrast(104%);
  }
}

}
  }
  
</style>
