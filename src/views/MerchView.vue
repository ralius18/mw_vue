<template>
  <Tabs active="merch" />

  <div class="merch">
    <v-container>
      <v-row>
        <v-col v-for="item in items" :key="item.description">
          <div class="">
            <v-img :src="item.image" />
            <div class="description">
              <div class="font-weight-bold">{{ item.description }}</div>
              <div class="price">{{ item.price }}</div>
            </div>
          </div>
        </v-col>
      </v-row>
      <MwBtn href="https://www.facebook.com/MirroredWalls/shop_tab" target="_blank">Purchase</MwBtn>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Tabs from '@/components/Tabs.vue';
import MwBtn from '@/components/MwBtn.vue';

import capImage from '@/assets/images/merch/cap-small.jpg';
import shirtImage from '@/assets/images/merch/tshirt.jpg';
import beanieImage from '@/assets/images/merch/beanie.jpg';

export default defineComponent({
  name: 'MerchView',

  data () {
    return {
      items: [
        {
          image: capImage,
          description: 'Cap',
          price: '$25'
        },
        {
          image: shirtImage,
          description: 'T-Shirt',
          price: '$30'
        },
        {
          image: beanieImage,
          description: 'Beanie - Limited Stock',
          price: '$20'
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
      margin: 0 auto;

      .v-col {
        max-width: 300px;
        margin: 0 auto 30px;
        .v-img {
          border: 2px solid black;
          margin: 0 auto;
        }
      }
    }

    .text {
      padding: 10px;
    }

    .description {
      padding: 10px 0;
      background: rgba(255, 255, 255, 0.25);
      border: 2px solid black;
      border-top: none;
    }
  }
</style>