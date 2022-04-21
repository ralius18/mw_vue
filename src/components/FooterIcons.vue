<template>
  <v-row justify="center">
    <a :href="links.spotify" target="_blank">
      <v-img class="social-icon" src="@/assets/images/socials/spotify.svg" />
    </a>
    <a :href="links.itunes" target="_blank">
    <v-img class="social-icon" src="@/assets/images/socials/itunes.svg" />
    </a>
    <a :href="links.ytmusic" target="_blank">
    <v-img class="social-icon" src="@/assets/images/socials/ytmusic.svg" />
    </a>
    <a :href="links.youtube" target="_blank">
    <v-img class="social-icon" src="@/assets/images/socials/youtube.svg" />
    </a>
    <a :href="links.facebook" target="_blank">
    <v-img class="social-icon" src="@/assets/images/socials/facebook.svg" />
    </a>
    <a :href="links.instagram" target="_blank">
    <v-img class="social-icon" src="@/assets/images/socials/instagram.svg" />
    </a>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "FooterIcons",
  data () {
    return {
      links: {
        spotify: 'https://open.spotify.com/artist/3IP9EibiPZC8p1BKe5yNXU',
        itunes: 'https://music.apple.com/us/artist/mirrored-walls/1556086315',
        ytmusic: 'https://music.youtube.com/channel/UCcv4kHRrCxOlYPHbojNF1dQ',
        youtube: 'https://www.youtube.com/channel/UC_xz1y12Qm8OPqAYkrD34Mg',
        facebook: 'https://www.facebook.com/mirroredwalls',
        instagram: 'https://www.instagram.com/mirrored_walls'
      }
    }
  }
})
</script>

<style scoped lang="scss">
.v-row{
  margin: 0 auto;
  max-width: 700px;
}

.social-icon {
  width: 30px;
  height: 30px;
  margin: 30px;
}
</style>