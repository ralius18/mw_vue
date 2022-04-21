<template>
  <v-img
    v-if="isHomePage"
    class="logo-img"
    src="@/assets/images/mw-submark.svg"
    max-height="40vh" />
  <v-img
    v-else
    class="text-img"
    src="@/assets/images/mw-text.svg" />
  <!-- <Tabs :active="active" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HeaderBar',

  data () {
    return {
    }
  },

  props: {
    active: String
  },

  computed: {
    isHomePage (): Boolean {
      return useRouter().currentRoute.value.name == 'home'
    }
  }
})
</script>

<style scoped lang="scss">
.logo-img {
  margin: 50px;
}
.text-img {
  margin: 4rem;
  max-height: 100px
}
</style>