<template>
  <Tabs active="listen" />

  <div class="video">
    <iframe :src="youtubePlaylist" allowtransparency="true" allow="encrypted-media" />
  </div>

  <v-container>
    <v-row>
      <v-col align-self="center">
        <div class="album-title">
          <div class="text">
            <h3>{{ albums.iidhyh.title }}</h3>
          </div>
        </div>
        <v-img class="album-img" :src="albums.iidhyh.imgUrl" />
        <iframe class="spotify" :src="albums.iidhyh.spotifyPlayer" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-col>
      <v-col>
        <div class="album-title">
          <div class="text">
            <h3>{{ albums.vanish.title }}</h3>
          </div>
        </div>
        <v-img class="album-img" :src="albums.vanish.imgUrl" />
        <iframe class="spotify" :src="albums.vanish.spotifyPlayer" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Tabs from '@/components/Tabs.vue';

import iidyhImage from '@/assets/images/albums/iidhyh.jpg';
import vanishImage from '@/assets/images/albums/vanish.jpg';

export default defineComponent({
  name: 'ListenView',

  components: {
    Tabs
  },
  
  data () {
    return {
      albums: {
        iidhyh: {
          title: 'if i didn\'t have you here',
          imgUrl: iidyhImage,
          spotifyPlayer: `https://open.spotify.com/embed/album/4Vu3zRncg9NzVV1IvFU10E`
        },
        vanish: {
          title: 'These Versions May Vanish If We Record Them In Studio. But For Now, Here\'s Some Music (Live)',
          imgUrl: vanishImage,
          spotifyPlayer: `https://open.spotify.com/embed/album/4Ztmg6XikrrwdZkvQAcay0`
        }
      },

      youtubePlaylist: `https://youtube.com/embed/videoseries?list=PLgn9dMyvha4gkDyDDkqVgN6vmV5qebBnw`
    }
  }
});
</script>

<style scoped lang="scss">
.v-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.album-img {
  width: 300px;
  height: 300px;
  border: 2px solid #000000;
  margin: 0 auto 50px;
}

.album-title {
  height: 100px;
  background: rgba(255, 255, 255, 0.25);
  border: 2px solid #000000;
  border-bottom: none;
  width: 300px;
  margin: 0 auto;
  position: relative;

  .text {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
  }
}

iframe:not(.spotify) {
  border: 2px solid #000000;
}

.video {
  width: 800px;
  aspect-ratio: 16 / 9;
  max-width: 90%;
  margin: 0px auto 50px auto;

  & iframe{
    width: 100%;
    height: 100%;
  }
}
</style>