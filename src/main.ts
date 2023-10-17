import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './store'
import { VueFire } from 'vuefire'
import { firebaseApp } from './firebase'

loadFonts()

createApp(App)
  .use(store)
  .use(VueFire, { firebaseApp })
  .use(router)
  .use(vuetify)
  .mount('#app')
