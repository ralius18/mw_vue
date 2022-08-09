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
      color: white;
      background-color: black;
    }

    transition: all 200ms;
    letter-spacing: normal;
    border: 2px solid black;
    color: black;
    background: rgba(255, 255, 255, 0.25);
  }
</style>
