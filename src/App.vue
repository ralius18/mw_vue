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
import { defineComponent, toRef } from 'vue'
import HeaderBar from '@/components/HeaderBar.vue';
import FooterIcons from '@/components/FooterIcons.vue';
import { lyricsRef, showsRef } from './firebase';
import { useCollection } from 'vuefire';

export default defineComponent({
  name: 'App',

  components: {
    HeaderBar,
    FooterIcons
  },

  data () {
    return { }
  },

  mounted () {
    useCollection(showsRef, { target: toRef(this.$store.state, 'shows')})
    useCollection(lyricsRef, { target: toRef(this.$store.state, 'lyrics')})
  }
})
</script>

<style lang="scss">
@import './assets/base.scss';
</style>