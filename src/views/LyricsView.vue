<template>
  <Tabs active="lyrics" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Tabs from '@/components/Tabs.vue';

export default defineComponent({
  name: 'LyricsView',

  components: {
    Tabs
}
});
</script>