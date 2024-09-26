<template>
  <div class="tabs" :class="isMobile() ? 'mobile' : ''">
    <MwBtn :class="aboutIsActive" to="/about">About</MwBtn>
    <MwBtn :class="listenIsActive" to="/listen">Listen</MwBtn>
    <MwBtn :class="showsIsActive" to="/shows">Shows</MwBtn>
    <br v-if="isMobile()" />
    <MwBtn :class="lyricsIsActive" to="/lyrics">Lyrics</MwBtn>
    <MwBtn :class="merchIsActive" to="/merch">Merch</MwBtn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MwBtn from "@/components/MwBtn.vue";

export default defineComponent({
  name: 'TabsComponent',
  components: { MwBtn },
  props: {
    active: String
  },

  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    }
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

  &:not(.mobile){
    .v-btn {
      &:not(:nth-of-type(5)) {
        border-right: none;
      }
    }
  }
}

.active {
  border: 2px solid white;
  background-color: white;
  color: black;
}

.tabs.mobile {
  .v-btn {
    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(4) {
      border-right: none;
    }

    &:nth-of-type(4),
    &:nth-of-type(5) {
      border-top: none;
    }
  }
}
</style>