<template>
  <Tabs active="lyrics" />

  <v-container class="lyrics d-flex flex-row" v-if="!isMobile()">
    <v-tabs
      direction="vertical"
      v-model="tab"
    >
      <v-tab
        v-for="item in filtered"
        :value="item.value"
        :key="item.value"
      >
        <span class="text-capitalize font-weight-bold text-wrap">
          {{ item.title }}
        </span>
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
        v-for="item in filtered"
        :value="item.value"
        :key="item.title"
        transition="false"
        reverse-transition="false"
      >
      <span class="text-capitalize font-weight-bold">{{ item.title }}</span>
      <pre class="lyric-text">{{ item.lyrics.replaceAll("\\n", "\n") }}</pre>
      </v-window-item>
    </v-window>
  </v-container>

  <v-container class="lyrics mobile-content" v-else>
    <v-tabs
      direction="vertical"
      v-model="tab"
      v-if="tab == ''"
    >
      <v-tab style="display: none" value=""></v-tab>
      <v-tab
        v-for="(item, i) in filtered"
        :value="item.value"
        :key="i"
      >
        <span class="text-capitalize font-weight-bold text-wrap">
          {{ item.title }}
        </span>
      </v-tab>
    </v-tabs>

    <v-container class="mobile-lyrics" v-else>
      <MwBtn class="back-btn" @click="clearSelectedTab()">Back</MwBtn>
      <v-window v-model="tab">
        <v-window-item
          v-for="(item, i) in filtered"
          :value="item.value"
          :key="i"
          transition="false"
          reverse-transition="false"
        >
        <span class="text-capitalize font-weight-bold">{{ item.title }}</span>
        <pre class="lyric-text">{{ item.lyrics.replaceAll("\\n", "\n") }}</pre>
        </v-window-item>
      </v-window>
      <MwBtn class="back-btn" @click="clearSelectedTab()">Back</MwBtn>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Tabs from '@/components/Tabs.vue';
import MwBtn from '@/components/MwBtn.vue';
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'LyricsView',

  data: () => {
    return {
      tab: ''
    }
  },

  computed: {
    ...mapGetters(['lyricsData']),
    filtered: function () {
      const hasAccess = this.$route.query.secret === "please"
      return hasAccess ? this.lyricsData : this.lyricsData.filter(x => !x.hidden)
    }
  },

  components: {
    Tabs,
    MwBtn
  },

  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },

    clearSelectedTab() {
      this.$data.tab = '';
    }
  }
});
</script>

<style scoped lang="scss">
  .lyrics {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;

    &.mobile-content {
      max-width: 100%;

      .v-tabs {
        max-width: 100%;
      }
    }

    .v-tabs {
      max-width: 250px;
      .v-btn {
        font-family: "Roboto Condensed";
        font-weight: bold;
        border: 2px solid black;
        background: rgba(255, 255, 255, 0.25);
        color: black;
        letter-spacing: normal;
        font-size: medium;
        transition: all 200ms;
        text-align: left;

        &:not(:last-child) {
          border-bottom: none;
        }

        &.v-tab--selected {
          color: white;
          background-color: black;
        }

        &:hover {
          color: white;
          background-color: black;
        }
      }
    }
  }

  .lyric-text {
    font-family: "Roboto Condensed";
    padding-top: 16px;
    overflow-x: auto;
    white-space: pre-wrap;
    color: white;
  }

  .v-window {
    width: 100%;
    .v-window-item {
      border: 2px solid black;
      padding: 16px;
      background: black;
      color: white;
    }
  }

  .back-btn {
    width: 100%;
    height: 48px;

    &:first-child {
      border-bottom: none;
    }

    &:last-child {
      border-top: none;
    }
  }

  .mobile-lyrics {
    padding: 0;
  }
</style>