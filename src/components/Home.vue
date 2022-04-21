<template>
  This is home
  <Tabs />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tabs from './Tabs.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Tabs,
  },
});
</script>