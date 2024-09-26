<template>
  <Tabs active="home" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

// Components
import Tabs from '../components/Tabs.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Tabs
  },

  computed: {
    isHomePage: () => {
      return useRouter().currentRoute.value.name == 'home'
    }
  }
});
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
