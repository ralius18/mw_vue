<template>
  <Tabs active="shows" />

  <div class="shows-table">
    <h2>Upcoming</h2>
    <v-table v-if="shows.length > 0">
      <thead>
        <th>Where</th>
        <th>When</th>
        <th>With</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="show in shows">
          <td>{{ show.location }}</td>
          <td>{{ show.time }}<br>{{ show.date }}</td>
          <td><ul><li v-for="friend in show.friends">{{ friend }}</li></ul></td>
          <td>
            <MwBtn :href="show.tickets" target="_blank">Tickets</MwBtn>
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
        {
          location: 'Cabana',
          date: '23/04/22',
          time: '7pm',
          friends: [
            'Sons of Henrik',
            'Happy Apathy'
          ],
          tickets: 'https://undertheradar.co.nz/'
        },
        {
          location: 'Pasiley Stage',
          date: '30/04/22',
          time: '8:30pm',
          friends: [
            'Yes Yes No',
            'Atlantic Wave'
          ],
          tickets: 'https://undertheradar.co.nz/'
        }
      ]
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
    background: none;

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