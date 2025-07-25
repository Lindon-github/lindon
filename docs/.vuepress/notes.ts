import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */
// interview
const zhNoteBefore = defineNoteConfig({
  dir: 'interview',
  link: '/before/',
  sidebar: 'auto',
  // sidebar: [
  //   '',
  //   {
  //     dir: '1.前端基础',
  //     text: '前端基础',
  //     icon: 'skill-icons:javascript',
  //     collapsed: true,
  //     items: 'auto',
  //   },
  //   {
  //     dir: '2.Vue',
  //     text: 'Vue',
  //     icon: 'material-icon-theme:vue',
  //     collapsed: true,
  //     items: 'auto',
  //   },
  //   {
  //     dir: '3.前端面试',
  //     text: '前端面试',
  //     icon: 'streamline-kameleon-color:article-file-2',
  //     collapsed: true,
  //     items: 'auto',
  //   },
  // ]
})
const zhNoteBack = defineNoteConfig({
  dir: 'back',
  link: '/backend/',
  sidebar: 'auto',
})
export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    zhNoteBefore,
    zhNoteBack,
  ],
})







/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

