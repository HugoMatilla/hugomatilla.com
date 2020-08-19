// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import DefaultLayout from '~/layouts/Default.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css'
  })
  // head.link.push({
    // rel: 'stylesheet',
    // href: 'styles.scss'
    // href: 'https://unpkg.com/bulmaswatch/cyborg/bulmaswatch.min.css'
    // href: 'https://unpkg.com/bulmaswatch/darkly/bulmaswatch.min.css'
    // href: 'https://unpkg.com/bulmaswatch/solar/bulmaswatch.min.css'
  // })
  Vue.use(Buefy)
  AOS.init()
}


