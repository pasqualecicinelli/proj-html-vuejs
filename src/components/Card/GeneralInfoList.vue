<script>
import CardGeneralInfo from "./CardGeneralInfo.vue";
import CardInfo from "./CardInfo.vue";
import { generalInfoList } from "../../data/store.js";

export default {
  data() {
    return {
      generalInfoList,
    };
  },
  components: { CardGeneralInfo, CardInfo },
};
</script>

<template>
  <section>
    <CardGeneralInfo
      v-for="booking in generalInfoList.listBook" :key="booking.id"
      :cardBooking="booking"
    />
  </section>

 <section class="container-info">
    <CardInfo
      v-for="info in generalInfoList.listInfo" :key="info.id"
      :cardInfo="info"
    />
  </section>
</template>

<style lang="scss" scoped as *>

.container-info{
  display: flex;
  gap: 2rem;
  
}
</style>
