<template>
  <div class="about">
    <Tabs active="about" />

    <div class="about-text">
      Mirrored Walls are a Post-Pop-Punk band from Hawke's Bay, New Zealand. Encapsulating Pop&#8209;Punk themes and heavier elements inspired by Post&#8209;Hardcore artists.<br />
      Or depending on who you talk to.. just call them Emo.<br />
      <br />
      Beginning with just an acoustic guitar in a garage, Mirrored Walls honed their songwriting before adding members and growing their sound.<br />
      <br />
      They have recently released their first professionally produced EP:<br /><span class="font-weight-bold">if i didn't have you here</span>.<br />
      <br />
      Stick around, the future is bright.<br />
    </div>
      
    <v-container class="members">
      <h2>Members</h2>

      <v-row justify="center">
      <div class="member-div">
        <v-img class="member-img" src="@/assets/images/members/MW-Ben-Digital-small.jpg" />
        <div class="description">
          <div class="font-weight-bold">Ben Dark</div>
          Vocals
        </div>
      </div>
      <div class="member-div">
        <v-img class="member-img" src="@/assets/images/members/MW-Regan-Digital-small.jpg" />
        <div class="description">
          <div class="font-weight-bold">Regan Hughes</div>
          Guitar / Vocals
        </div>
      </div>
      <div class="member-div">
        <v-img class="member-img" src="@/assets/images/members/MW-Sophie-Digital-small.jpg" />
        <div class="description">
          <div class="font-weight-bold">Sophie Dark</div>
          Vocals
        </div>
      </div>
      <div class="member-div">
        <v-img class="member-img" src="@/assets/images/members/MW-Brad-Digital-small.jpg" />
        <div class="description">
          <div class="font-weight-bold">Brad Stone</div>
          Bass
        </div>
      </div>
      <div class="member-div">
        <v-img class="member-img" src="@/assets/images/members/MW-Matt-Digital-small.jpg" />
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
    max-width: 600px;
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
      }

      .description {
        background: rgba(255, 255, 255, 0.25);
        border: 2px solid black;
        border-top: none;
      }
    }
  }
</style>
