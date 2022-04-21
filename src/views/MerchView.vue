<template>
  <Tabs active="merch" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Tabs from '@/components/Tabs.vue';

export default defineComponent({
  name: 'MerchView',

  components: {
    Tabs
}
});
</script>