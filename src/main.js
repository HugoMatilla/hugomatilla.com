// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import DefaultLayout from '~/layouts/Default.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'prismjs/themes/prism-okaidia.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css'
  })
  head.meta.push({
    name: 'twitter:card',
    content: 'summary'
  })
  head.meta.push({
    name: 'twitter:site',
    content: '@hugomatgom'
  })
  head.meta.push({
    name: 'twitter:title',
    content: 'Hugo Matilla'
  })
  head.meta.push({
    name: 'twitter:image',
    content: 'https://raw.githubusercontent.com/HugoMatilla/hugomatilla.com/master/src/assets/hugomatillaTwitter.png'
  })
  head.meta.push({
    name: 'twitter:url',
    content: 'https://www.hugomatilla.com'
  })
  head.meta.push({
    name: 'og:image',
    content: 'https://raw.githubusercontent.com/HugoMatilla/hugomatilla.com/master/src/assets/hugomatillaTwitter.png'
  })
  head.meta.push({
    name: 'og:description',
    content: 'Hugo Matilla: Software Developer'
  })
  Vue.use(Buefy)
  Vue.prototype.$AOS = AOS
}
