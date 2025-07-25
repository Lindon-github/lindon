import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '🏠首页', link: '/' },
  { text: '📑博客', link: '/blog/' },
  // { text: '🏷️标签', link: '/blog/tags/' },
  // { text: '🗄️归档', link: '/blog/archives/' },
  {
    text: '🗂️我的笔记',
    items: [
      { text: 'interview', link: '/notes/interview/', icon: 'skill-icons:javascript' },
      { text: 'back', link: '/backend/', icon: 'skill-icons/java-light' },
    ]
  },
  { text: '站点导航', link: '/links/', icon: 'flat-color-icons:redo' },
])

export const enNavbar = defineNavbarConfig([
  { text: '🏠Home', link: '/en/' },
  { text: '📑Blog', link: '/en/blog/' },
  { text: '🏷️Tags', link: '/en/blog/tags/' },
  { text: '🗄️Archives', link: '/en/blog/archives/' },
  // {
  //   text: 'Notes',
  //   items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  // },
])

