<template>
  <v-btn
    variant="outlined"
    size="x-large"
    flat
    :rounded="0"
    :border="2"
    class="text-capitalize font-weight-bold"
  >
    <slot />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VBtn } from 'vuetify/lib/components';
export default defineComponent({
  name: 'MwBtn',
  components: { VBtn }
})
</script>

<style scoped lang="scss">
  .v-btn {
    &:hover, &.active {
      color: black;
      background-color: white;
    }

    transition: all 200ms;
    letter-spacing: normal;
    border: 2px solid white;
    color: white;
  }
</style>
