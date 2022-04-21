<template>
  <div class="tabs">
    <MwBtn :class="aboutIsActive" to="/about">About</MwBtn>
    <MwBtn :class="listenIsActive" to="/listen">Listen</MwBtn>
    <MwBtn :class="showsIsActive" to="/shows">Shows</MwBtn>
    <MwBtn :class="lyricsIsActive" to="/lyrics">Lyrics</MwBtn>
    <MwBtn :class="merchIsActive" to="/merch">Merch</MwBtn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MwBtn from "@/components/MwBtn.vue";

export default defineComponent({
  name: 'Tabs',
  components: { MwBtn },
  props: {
    active: String
  },

  computed: {
    aboutIsActive (): string {
      return this.active == 'about' ? 'active' : '';
    },
    listenIsActive (): string {
      return this.active == 'listen' ? 'active' : '';
    },
    showsIsActive (): string {
      return this.active == 'shows' ? 'active' : '';
    },
    lyricsIsActive (): string {
      return this.active == 'lyrics' ? 'active' : '';
    },
    merchIsActive (): string {
      return this.active == 'merch' ? 'active' : '';
    }
  }
})
</script>

<style lang="scss">
.tabs {
  padding-bottom: 4rem;
  text-align: center;
}

.active {
  border: 2px solid white;
  background-color: white;
  color: black;
}
</style>