// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/scss/main.scss'
import DefaultLayout from '~/layouts/Default.vue'
import VueAnalytics from 'vue-analytics'
import Vuex from 'vuex'
import store from '~/store/'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Vue.use(VueAnalytics, {
  //   id: '',
  //   router
  // })

  appOptions.store = store

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
  // })
}
