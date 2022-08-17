<template>
  <Tabs active="shows" />

  <div class="shows-table">
    <h2>Upcoming</h2>
    <v-table v-if="shows.length > 0">
      <tbody>
        <tr v-for="show in shows" :key="show.date">
          <td>
            <v-row>
              <v-col>
                <b>
                  {{ show.date }} - {{ show.time }}<br>
                  {{ show.venue }}<br>
                  {{ show.city }}, {{ show.country }}<br>
                </b>
              </v-col>
              <v-col>
                With friends:
                <ul><li v-for="friend in show.friends" :key="friend">{{ friend }}</li></ul>
              </v-col>
            </v-row>
          </td>
          <td>
            <MwBtn :href="show.tickets" target="_blank">
              <div v-if="show.tickets != ''">Tickets</div>
              <div v-else>Tickets<br>Available Soon</div>
            </MwBtn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <div v-else>
      No Upcoming Shows<br>&#128549;
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Tabs from '@/components/Tabs.vue';
import MwBtn from '@/components/MwBtn.vue';

export default defineComponent({
  name: 'ShowsView',

  components: {
    Tabs,
    MwBtn
  },

  data() {
    return {
      shows: [
        // {
        //   location: 'Cabana',
        //   date: '23/04/22',
        //   time: '7pm',
        //   friends: [
        //     'Sons of Henrik',
        //     'Happy Apathy'
        //   ],
        //   tickets: 'https://undertheradar.co.nz/'
        // },
        {
          venue: 'Cabana',
          city: 'Napier',
          country: 'NZ',
          date: '19th August \'22',
          time: '7.30pm',
          friends: [
            'Bad Schematics',
            'Grays Road'
          ],
          tickets: 'https://www.undertheradar.co.nz/gig/79682/Mirrored-Walls---Bad-Schematics---Grays-Road.utr'
        },
        {
          venue: 'The Stomach',
          city: 'Palmerston North',
          country: 'NZ',
          date: '10th September \'22',
          time: '7.30pm',
          friends: [
            'Bad Schematics',
            'Old Man Pine'
          ],
          tickets: 'https://www.undertheradar.co.nz/gig/80293/Bad-Schematics-Old-Man-Pine-And-Mirrored-Walls.utr'
        },
        {
          venue: 'Paisley Stage',
          city: 'Napier',
          country: 'NZ',
          date: '8th October \'22',
          time: 'Time TBD',
          friends: [
            'Bad Schematics',
            'TBD'
          ],
          tickets: ''
        }
      ]
    }
  },

  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    }
  }
});
</script>

<style scoped lang="scss">
.shows-table {
  margin: 0 auto 50px;
  max-width: 800px;
  text-align: center;

  .v-table {
    background: rgba(255, 255, 255, 0.25);
    border: 2px solid black;

    th, td {
      font-size: 18px !important;
    }

    th {
      padding-bottom: 20px;
      border-bottom: 2px solid white;
    }

    td {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    
    tr:hover {
      background: none;
    }
    .ticket-btn {
      transition: all 200ms;
      border: 2px solid white;
      color: white;

      &:hover {
        color: black;
        background-color: white;
        border: 2px solid white;
      }
    }
  }

  h2 {
    margin-bottom: 30px;
  }

  ul {
    list-style: none;
  }
}
</style>