import { createStore } from 'vuex'

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
  ] }),

  getters: {
    upcomingShows: (state) => {
      return state.shows.filter((show: any) => show.date.toDate() > new Date())
    },

    upcomingShowsCound: (state, getters) => {
      return getters.upcomingShows.length
    }
  }
})