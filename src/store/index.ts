import { createStore } from 'vuex'
import { Timestamp } from "firebase/firestore"; 

interface Show {
    date: Timestamp;
    city: string;
    country: string;
    friends: string[];
    tickets: string;
    venue: string;
}

interface Song {
  title: string;
  lyrics: string;
}

export default createStore({
  state: () => ({ shows: [
    // {
    //   venue: 'Paisley Stage',
    //   city: 'Napier',
    //   country: 'NZ',
    //   date: '26th August \'23',
    //   time: '8pm',
    //   friends: [
    //     'Kita Turner-Low',
    //     'Blinding White Lights',
    //     'Holloway'
    //   ],
    //   tickets: 'https://www.undertheradar.co.nz/tour/20695/Mirrored-Walls--Holloway--Blinding-White-Lights--Kita-Turner-Low.utr'
    // }
  ],
  lyrics: []
 }),

  getters: {
    upcomingShows: (state) => {
      return state.shows.filter((show: Show) => show.date.toDate() > new Date())
    },

    upcomingShowsCound: (state, getters) => {
      return getters.upcomingShows.length
    },
    
    lyricsData: (state) => {
      return state.lyrics.sort((a: Song, b: Song) => a.title.localeCompare(b.title))
    }
  }
})