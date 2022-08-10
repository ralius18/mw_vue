<template>
  <router-link to="/" class="header-link">
    <v-img
      v-if="isHomePage"
      class="logo-img"
      :class="imageLoading ? 'load' : ''"
      src="@/assets/images/mw-submark.svg"
      v-on:load="imageLoaded()"
      height="40vh" />
    <v-img
      v-else
      class="text-img"
      src="@/assets/images/mw-text.svg" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HeaderBar',

  data () {
    return {
      imageLoading: true
    }
  },

  props: {
    active: String
  },

  methods: {
    imageLoaded () {
      this.imageLoading = false
    }
  },

  computed: {
    isHomePage (): Boolean {
      return useRouter().currentRoute.value.name == 'home'
    }
  }
})
</script>

<style scoped lang="scss">
.header-link {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

.logo-img {
  margin: 50px;
  transition: opacity 3000ms;

  &.load {
    opacity: 0;
  }
}

.text-img {
  margin: 50px auto;
  height: 100px;
}
</style>