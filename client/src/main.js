// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueYouTubeEmbed from 'vue-youtube-embed'

import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import Panel from '@/components/Common/Panel'

Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed)
Vue.use(Vuetify)

// Declare global component
Vue.component('panel', Panel)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
