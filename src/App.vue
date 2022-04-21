<template>
  <v-app>
    <v-main>
      <HeaderBar />

      <router-view/>

      <FooterIcons />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderBar from '@/components/HeaderBar.vue';
import FooterIcons from '@/components/FooterIcons.vue';

export default defineComponent({
  name: 'App',

  components: {
    HeaderBar,
    FooterIcons
  },

  data () {
    return { }
  }
})
</script>

<style lang="scss">
@import './assets/base.scss';
</style>