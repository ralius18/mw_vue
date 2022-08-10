<template>
  <div class="about">
    <Tabs active="about" />

    <div class="about-text">
      Based in Napier, New Zealand, Mirrored Walls started from humble beginnings as an acoustic set with soothing melodies to stir the soul<br />
      <br />
      Now armed with electric guitars, drums and bass, Mirrored Walls becomes an electrifying act with lyrics to provoke thought, music to stir emotion and harmonic vocals to match the intensity that is 'Mirrored Walls'<br />
      <br />
      An originals band that fits into all tangents of rock, post-pop punk, post-emo, screamo and alternative<br />
      <br />
      We define our own genre<br />
      <div class="font-weight-bold">We are Mirrored Walls</div>
    </div>
      
    <v-container class="members">
      <h2>Members</h2>

      <v-row justify="center">
      <div class="member-div">
        <v-img class="member-img" src="@/assets/images/members/ben.jpg" />
        <div class="description">
          <div class="font-weight-bold">Ben Dark</div>
          Vocals
        </div>
      </div>
      <div class="member-div">
        <v-img class="member-img" src="@/assets/images/members/regan.jpg" />
        <div class="description">
          <div class="font-weight-bold">Regan Hughes</div>
          Guitar / Vocals
        </div>
      </div>
      <div class="member-div">
        <v-img class="member-img" src="@/assets/images/members/sophie.jpg" />
        <div class="description">
          <div class="font-weight-bold">Sophie Dark</div>
          Vocals
        </div>
      </div>
      <div class="member-div">
        <v-img class="member-img" src="@/assets/images/members/brad.jpg" />
        <div class="description">
          <div class="font-weight-bold">Brad Stone</div>
          Bass
        </div>
      </div>
      <div class="member-div">
        <v-img class="member-img" src="@/assets/images/members/matthew.jpg" />
        <div class="description">
          <div class="font-weight-bold">Matthew Tuite</div>
          Drums
        </div>
      </div>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Tabs from '@/components/Tabs.vue';
import HeaderBar from '@/components/HeaderBar.vue';

export default defineComponent({
  name: 'AboutView',

  components: {
    Tabs,
    HeaderBar
},
});
</script>

<style scoped lang="scss">
  .about-text {
    text-align: center;
    max-width: 540px;
    padding: 20px 20px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.25);
    border: 2px solid black;
  }

  .members {
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
    padding-top: 70px;

    .member-div {
      max-width: 200px;
      margin: 30px 20px;

      .member-img {
        border: 2px solid black;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 10px;
      }

      .description {
        background: rgba(255, 255, 255, 0.25);
        border: 2px solid black;
      }
    }
  }
</style>
