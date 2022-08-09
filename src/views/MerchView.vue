<template>
  <Tabs active="merch" />

  <div class="merch">
    <v-container>
      <div class="text">Interested in some kick-ass merch?</div>
      <v-row>
        <v-col v-for="item in items" :key="item.description">
          <v-img :src="item.image" />
          <div class="description font-weight-bold">{{ item.description }}</div>
          <div class="price">{{ item.price }}</div>
        </v-col>
      </v-row>
      <MwBtn href="mailto:mirroredwallsband@gmail.com?subject=I need your merch!&body=Hello awesome band people, I need to purchase your merch">Contact us to organise a purchase</MwBtn>
      <div class="text">Or hit us up on any socials</div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Tabs from '@/components/Tabs.vue';
import MwBtn from '@/components/MwBtn.vue';

export default defineComponent({
  name: 'MerchView',

  data () {
    return {
      items: [
        {
          image: require('@/assets/images/merch/beanie.jpg'),
          description: 'Beanie',
          price: '$25'
        }
      ]
    }
  },

  components: {
    Tabs,
    MwBtn
}
});
</script>

<style scoped lang="scss">
  .merch {
    text-align: center;
    margin: 0 auto 50px;
    .v-container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .v-row {
      margin: 30px auto;

      .v-col {
        
        .v-img {
          max-width: 300px;
          border: 2px solid black;
          margin: 10px auto;
        }
      }
    }

    .text {
      padding: 10px;
    }

    .description {
      padding-top: 10px;
    }
  }
</style>