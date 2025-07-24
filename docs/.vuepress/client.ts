import { defineClientConfig } from 'vuepress/client'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import CustomComponent from './theme/components/Custom.vue'
import Layout from './theme/layouts/Layout.vue'
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('RepoCard', RepoCard)
    app.component('CustomComponent', CustomComponent)
    app.component('Swiper', Swiper)
  },
  // layouts: {
  //   Layout,
  // },
})
